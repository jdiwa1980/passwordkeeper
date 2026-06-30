import { useNavigate } from "react-router-dom";
import KeeperCards from "../sections/KeeperCards"
import RetroForm from "../sections/RetroForm";
import NavBar from "../layout/NavBar" 
import DeleteModal from "../components/DeleteModal";
import { useEffect, useState } from "react";
import { getRecords, createRecord, deleteRecord, updateRecord } from "../api/recordsApi";

const Dashboard = () => {
  
  const navigate = useNavigate();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);

  const [records, setRecords] = useState([])

  const username = localStorage.getItem("username");

  console.log("editing record:", editingRecord)
// fetching records from mongodb
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await getRecords()
        setRecords(response.data);
      } catch (err) {
        console.error("Fetch failed:", err)
      }
    }

    fetchRecords();
  },[])



//   console.log("RECORDS: ",records);
//   console.log("EDITINGRECORD: ",editingRecord);
// CRUD functions

const handleAddRecord =  async (formData) => {
         
        try {
            const response = await createRecord(formData);

            console.log("POST response:", response.data);

            setRecords(prev => [
              ...prev,
              response.data
            ])

            setIsAddModalOpen(false);

          } catch (err) {
              console.error(err)
          }
    }

  const handleEditRecord = async (updatedRecord) => {
          
        console.log("DATA: ", updatedRecord);
        console.log("ID: ", updatedRecord._id);
        try {
              const response = await updateRecord(
              updatedRecord._id, 
              updatedRecord
            );

            console.log("SERVER RESPONSE", response.data);

            setRecords(prev => 
            prev.map((record) => 
              record._id === response.data._id
                  ? response.data
                  : record
            )
          );

          setIsAddModalOpen(false);
          setEditingRecord(null);

        } catch (err) {
          console.error(err)
        }
    }

    const handleDeleteClick = (records) => {
        setRecordToDelete(records)

        setIsDeleteModalOpen(true);
    }

  const confirmDelete =  async () => {
        
        console.log(recordToDelete); // checking if trash button is getting valid _id
        await deleteRecord(recordToDelete._id); // this deletes the record
        
        // this updates the state
        setRecords(prev => 
          prev.filter(record => 
          
            record._id !== recordToDelete._id
          )
        );
        setRecordToDelete(null);
        setIsDeleteModalOpen(false);
    };

    const cancelDelete = () => {
      setRecordToDelete(null);
      setIsDeleteModalOpen(false)
    }
  // Functions to open the modal

  const handleEdit = (record) => {
    setEditingRecord(record)
    setIsAddModalOpen(true)
  }

  const handleAdd = () => {
    setEditingRecord(null)
    if (setIsAddModalOpen(true)) {
      setIsMobileMenuOpen(false)
    } 
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/")
  }

  const handleTest = () => {
    console.log("hello world!")
  }

  return (
    <>
    {/* <h1>Hello World</h1> */}
    <div>
      <NavBar onContactClick={handleAdd}
              onMobileClick={handleTest}
              onLogOut={handleLogout}
              username={username}
      />
      <main>
        
        <KeeperCards onEdit={handleEdit}
                     records={records}
                     onDelete={handleDeleteClick}
        />
        <RetroForm 
            isOpen={isAddModalOpen}
            onClose={() =>setIsAddModalOpen(false)}
            editingRecord={editingRecord}
            onAdd={handleAddRecord}
            onEdit={handleEditRecord}
        />
        <DeleteModal 
          isOpen={isDeleteModalOpen}
          record={recordToDelete}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />

      </main>
    </div>
      
      
    </>
  )
}

export default Dashboard;

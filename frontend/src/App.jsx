import KeeperCards from "./sections/KeeperCards"
import RetroForm from "./sections/RetroForm";
import NavBar from "./layout/NavBar" 
import { useEffect, useState } from "react";
import { getRecords, createRecord, deleteRecord, updateRecord } from "./api/recordsApi";

function App() {
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const [records, setRecords] = useState([])

  console.log("editing record:", editingRecord)
// fetching records from mongodb
  useEffect(() => {
    const fetchRecords = async () => {
      const response = await getRecords()
      setRecords(response.data);
    }

    fetchRecords();
  },[])

  console.log("RECORDS: ",records);
  console.log("EDITINGRECORD: ",editingRecord);
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

  const handleDeleteRecord =  async (id) => {
        
        console.log(id); // checking if trash button is getting valid _id
        await deleteRecord(id); // this deletes the record
        
        // this updates the state
        setRecords(prev => 
          prev.filter(record => 
          
            record._id !== id
          )
        );
    };
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

  const handleTest = () => {
    console.log("hello world!")
  }

  return (
    <>
    <div>
      <NavBar onContactClick={handleAdd}
              onMobileClick={handleTest}
      />
      <main>
        
        <KeeperCards onEdit={handleEdit}
                     records={records}
                     onDelete={handleDeleteRecord}
        />
        <RetroForm 
            isOpen={isAddModalOpen}
            onClose={() =>setIsAddModalOpen(false)}
            editingRecord={editingRecord}
            onAdd={handleAddRecord}
            onEdit={handleEditRecord}
        />
      </main>
    </div>
      
      
    </>
  )
}

export default App

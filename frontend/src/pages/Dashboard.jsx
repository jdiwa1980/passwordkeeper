import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RetroForm from "../sections/RetroForm";
import NavBar from "../layout/NavBar" 
import DeleteModal from "../components/DeleteModal";
import Accordion from "../sections/Accordion";
import SearchBox from "../components/SearchBox";
import VaultLock from "../components/VaultLock";
import { useEffect, useState, useRef } from "react";
import { getRecords, createRecord, deleteRecord, updateRecord } from "../api/recordsApi";

const Dashboard = () => {
  
  const PAGE_SIZE = 5;

  const navigate = useNavigate();
  const lastItemRef = useRef(null);

  
  
  // States 
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [view, setView] = useState("all");
  const [isVaultLocked, setIsVaultLocked] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [search, setSearch] = useState("");

  const [records, setRecords] = useState([])

  const username = localStorage.getItem("username");

 
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

const formatDate = (date) =>
            date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            });

// 1. sort the records first
const sortedRecords = [...records]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
// 1.a view filter for "all" ,"favorites"
const viewedRecords =
   // this points to the states of [view,setView] w/c is changed by clicking all or favorite navlinks
    view === "favorites"
        ? sortedRecords.filter(record => record.favorite)
        : sortedRecords; // this points to all records(of course sorted by dates from new to old)

// 2. apply search filter
const query = search.trim().toLowerCase();

const filteredRecords = [...viewedRecords]
        .filter((record) =>
            record.account.toLowerCase().includes(query) ||
            record.description.toLowerCase().includes(query) ||
            // iconKey is not a required field in the model so we have to return a string when this value is empty
            (record.iconKey || "").toLowerCase().includes(query) ||
            formatDate(new Date(record.createdAt))
                    .toLowerCase()
                    .includes(query)
    )

// 3. pass as props to accordion or component that displays data
const displayedRecords = filteredRecords.slice(0, visibleCount)
// always do sort > filter > slice in that order so your filter will have access to all records
// and not cut out most of the records when you slice first before filter.
useEffect(() => {

  const observer = new IntersectionObserver(
    (entries) => {

      const first = entries[0];

      if (
        first.isIntersecting &&
        !loadingMore &&
        visibleCount < filteredRecords.length
        
      ) {
        setLoadingMore(true)
        setVisibleCount(prev => Math.min(prev + PAGE_SIZE, filteredRecords.length));
        
      }
    },
    {
      threshold: 1,
    }
  );

  const current = lastItemRef.current;

  if (current) {
    observer.observe(current);
  }

  return () => {
    if (current) {
      observer.unobserve(current);
    }
  };

}, [visibleCount, filteredRecords.length]);

useEffect(() =>{
  setLoadingMore(false);
}, [visibleCount])

useEffect(() => {
    setVisibleCount(PAGE_SIZE);
}, [search]);

// CRUD functions

const handleAddRecord =  async (formData) => {
         
        try {
            const response = await createRecord(formData);

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
          
        try {
              const response = await updateRecord(
              updatedRecord._id, 
              updatedRecord
            );

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
  const handleFavorite = async (record) => {
        //;updates the favorite key to true
        const updated = {
          ...record,
          favorite: !record.favorite,
          
        }

        // this saves the favorite boolean to the db but doesn't update the state of records
        const response = await updateRecord(
        record._id,
        updated
        );

        setRecords(prev=> 
          prev.map(item => 
            item._id === response.data._id 
                ? response.data
                : item
          )
        )
        
  }

  const confirmDelete =  async () => {
        
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

  const handleSearch = () => {
    setIsSearchOpen(prev => !prev);
  }

  return (
    <>
    {/* <h1>Hello World</h1> */}
    <div>
      <NavBar onContactClick={handleAdd}
              onAllClick = {() => setView("all")}
              onFavoriteClick = {() => setView("favorites")}
              onSearchClick={handleSearch}
              onLockClick = {() => setIsVaultLocked(true)}
              onLogOut={handleLogout}
              username={username}
      />
      <main>
        <div className="record-section">
            {isSearchOpen ? 
            <SearchBox 
              search={search} 
              setSearch={setSearch}
            /> : null  
            }
            
            {isVaultLocked ? (
              <VaultLock 
                onUnlock={() => setIsVaultLocked(false)}
              />
            ): (
              <Accordion 
              search={search}
              records={displayedRecords}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              lastItemRef={lastItemRef}
              onFavorite={handleFavorite}
              />
            )}

            {visibleCount < records.length && !search  && !isVaultLocked ? (
            <button
                className="nes-btn is-primary load-more"
                onClick={() =>
                    setVisibleCount(prev =>
                        Math.min(prev + PAGE_SIZE, records.length)
                    )
                }
            >
                Load More
                <FaChevronDown />
            </button>
            ) : null}

        </div>
        
        
        
        <RetroForm 
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            editingRecord={editingRecord}
            onAdd={handleAddRecord}
            onEdit={handleEditRecord}
        />
        <DeleteModal 
          isOpen={isDeleteModalOpen}
          record={recordToDelete}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          onClose={() => setIsDeleteModalOpen(false)}
        />

      </main>
    </div>
    </>
  )
}

export default Dashboard;


import { useState } from "react";
import { FaHome, FaSearch, FaInfo } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const SearchBox = ({ setSearch, search }) => {
    

    const [value, setValue] = useState("");

    const handleClear = () => {
        setValue("");
        setSearch("");
    }


    return ( 
        
            <form className="searchBox-wrapper"
                onSubmit={(e) => {
                    e.preventDefault();
                    setSearch(value);
                    
                }}
            >
                <input type="text"
                        value={value} 
                        className="nes-input"
                        placeholder="search items..."
                        onChange={(e) => setValue(e.target.value)}
                        
                />
                {value && (
                    <button onClick={handleClear}>
                        <RxCross2 size={25}/>
                    </button>
                )}
                <button type="submit">
                    <FaSearch  size={25}/>
                </button>
            </form>
     );
 }

export default SearchBox;
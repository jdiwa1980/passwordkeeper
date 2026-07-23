import { FaEyeSlash, FaEye, FaTrash, FaGlobe,FaStar, FaRegStar } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { CiTimer, CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { iconLookup, iconPicker } from "../data/icon_data";
import SearchBox from "../components/SearchBox";

import { useState } from "react";

const Accordion = ({ search, records, onEdit, onDelete, lastItemRef, onFavorite }) => {

    const [visiblePasswords, setVisiblePasswords] = useState({});

    const formatDate = (date) =>
            date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            });
    
    const formatTime = (date) =>
            date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
            });
       

    

    const getRecordIcon = (records) => {
    // 1. User manually selected an icon
    if (records.iconKey) {
        const selected = Object.values(iconPicker)
            .flat()
            .find(
                item => item.name.toLowerCase() === records.iconKey.toLowerCase()
            );

        if (selected) {
            const Icon = selected.icon;
            return <Icon size={25} />;
        }
    }

    // 2. Fall back to keyword matching
    const text = `${records.description}`.toLowerCase();

    const match = iconLookup.find(item =>
        item.keywords.some(keyword =>
            text.includes(keyword.toLowerCase())
        )
    );

    // 3. Found a keyword match
    if (match) {
        return match.icon;
    }

    // 4. Nothing matched
    return <FaGlobe size={25} />;
    }



    const togglePassword = (index) => {
        
            setVisiblePasswords(prev => ({
                ...prev,
                [index]: !prev[index]
            }))
        }
    
    if (records.length === 0) {
        return (
            <div className="accordion-group">
                <p className="nes-text is-warning">
                    No matching records. Clear the search to see all entries.
                </p>
            </div>
            
        )
    }

    return (
        <>
            
        <div className="accordion-group">
            {
                records.map((item, idx) => {
                const createdAt = new Date(item.createdAt)
            
            return (
                <details 
                        className="nes-container is-rounded" 
                        key={item._id}
                        ref={
                            idx === records.length - 1
                                ? lastItemRef
                                : null
                        }
                    >
                        <summary>
                            <span>{getRecordIcon(item)}</span>
                            <span>{item.account}</span>
                            <span className="arrow">
                                <FaChevronDown />
                            </span>
                        </summary>
                        
                        <div className="content-wrapper">
                            <div className="content-body">
                                <div className="field-date">
                                    <div>
                                        {/* added space to the date/time values to avoid stlying in css  */}
                                        <CiCalendarDate />
                                        <span> {formatDate(createdAt)}</span>
                                    </div>
                                    <div>
                                        <CiTimer />
                                        <span> {formatTime(createdAt)}</span>
                                    </div>
                                    
                                </div>
                                <div className="field">
                                    <p className="field-title">password</p>
                                    <div className="password-cell">
                                        <span className="password-text">
                                            {visiblePasswords[idx] ?
                                            item.password :
                                            "•".repeat((item.password || "").length) 
                                        }
                                        </span>
                                        <button type="button"
                                                onClick={() => togglePassword(idx)}
                                        >{visiblePasswords[idx] ? <FaEyeSlash /> : <FaEye /> }</button>
                                    </div>

                                </div>
                                <div className="field">
                                    <p className="field-title">description</p>
                                    <span className="field-value">{item.description}</span>
                                </div> 
                            </div>
                            <div className="actions-cell">
                                <button type="button"
                                        onClick={() => onFavorite(item)}
                                >
                                    {item.favorite
                                        ? <FaStar color="#FFD700"/>
                                        : <FaRegStar />
                                    }

                                </button>
                                <button type="button"
                                        onClick={() => onEdit(item)}
                                >
                                    <FaPencil />
                                </button>
                                <button type="button"
                                        onClick={() => onDelete(item)}
                                >              
                                        <FaTrash />
                                </button>
                            </div>
                        </div>
                    </details>
            )
                                    
            })}
        </div>
        </>
        
      );
    };

export default Accordion;
import { useState } from "react";
import { iconPicker } from "../data/icon_data";
import { FaFacebook, FaGlobe } from "react-icons/fa";

const IconPicker = ({ value, onChange }) => {

    const categories = Object.keys(iconPicker);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(FaGlobe);
    

    const [activeTab, setActiveTab] = useState(categories[0])

    return ( 
        // <div className="tabs">
        <>
            <button type="button" 
                                        className="icon-picker-btn"
                                        onClick={() => setShowEmojiPicker(prev => !prev)}
                                >
                                    {/* <FaGlobe className="emoji-icon" /> */}
                                    {selectedIcon}
            </button>
            {showEmojiPicker && (
                <div className="tabs">
                <div className="tab-buttons">
                    {categories.map(category => (
                        <button 
                            type="button"
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={
                                activeTab === category
                                    ? "tab-btn active"
                                    : "tab-btn"
                            }
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="content">
                    {iconPicker[activeTab].map(item => {
                    const Icon = item.icon;

                    return (
                        <button
                            type="button"
                            key={item.name}
                            className="icon-card"
                            onClick={() => {
                                onChange(item.name.toLowerCase());
                                setSelectedIcon(item.icon);
                                setShowEmojiPicker(false);
                                
                            }}
                        >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </button>
                        )
                    })}
                </div>
            </div>

            )}
            
        </>
        
     );
}
 
export default IconPicker;

{/* 2. Access the array by referencing the main source: iconPicker[category] */}
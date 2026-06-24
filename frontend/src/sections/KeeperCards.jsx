
import { FaEyeSlash, FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { iconList } from "../data/icon_data";

import { useEffect, useState } from "react";

const KeeperCards = ({ records, onEdit, onDelete  }) => {
    const [isEditing, SetIsEditing] = useState(false)
    const [visiblePasswords, setVisiblePasswords] = useState({});

    const getIcon = (description) => {
        const text = `${description}`.toLowerCase();

        const match = iconList.find((item) => 
            item.keywords.some((keyword) =>
                text.includes(keyword.toLowerCase())
            )
        );

        return match ? match.icon : <FaGlobe />;
    }

    const togglePassword = (index) => {
        setVisiblePasswords(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    return (  
        <section className="keeper-cardtable">
            <div className="nes-table-responsive">
                <table className="nes-table is-bordered is-centered">
                    <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Account/Username</th>
                        <th>password</th>
                        <th>Description</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {records.map((item, index) => (
                        <tr key={item._id}>
                            <td>{getIcon(item.description)}</td>
                            <td>{item.account}</td>
                            <td className="actions">
                                <div className="password-cell">
                                    <span className="password-text">
                                        {visiblePasswords[index]
                                            ? item.password
                                            : "•".repeat((item.password || "").length)
                                        }
                                    </span>
                                    <button type="button"
                                        onClick={() => togglePassword(index)}
                                    >{visiblePasswords[index] ? <FaEyeSlash /> : <FaEye /> }</button>
                                </div>
                            </td>
                            <td>{item.description}</td>
                            <td>
                                <button type="button"
                                        onClick={() => onEdit(item)}
                                >
                                    <FaPencil />
                                </button>
                                <button type="button"
                                        onClick={() => onDelete(item._id)}
                                >              
                                        <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
 
export default KeeperCards;
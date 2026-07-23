import { useEffect, useState } from "react";
import InputField from "../components/inputField";
import { FaCheck, FaGlobe } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import IconPicker from "../components/iconpicker";


const RetroForm = ({ isOpen, onClose, editingRecord, onAdd, onEdit }) => {
    
    const [formData, setFormData] = useState({
        account: "",
        iconKey: "",
        password: "",
        confirmPw: "",
        description: "",
    })

    const [ error, setError ] = useState("");
    const [ success, setSuccess ] = useState("")

    const tooltip = [
        {
            description: "write other information here..."
        }
    ]
    

    //helper function
    const resetForm = () => {
        setFormData({
                account: "",
                iconKey: "",
                password: "",
                confirmPw: "",
                description: "",
            });
    }

    useEffect(() => {
        if (!success) return;
        const timer = setTimeout(() => {
            setSuccess("");
            setError("");
        }, 3000);
        return () => 
            clearTimeout(timer)
    },[success]) 

    useEffect(() => {
        if (editingRecord) {
            setFormData({
                ...editingRecord,
                confirmPw: editingRecord.password,
            });
        }
        
    },[editingRecord])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password  !== formData.confirmPw) {
            setError("Passwords do not match");
            return
        } 
        
        if (editingRecord) {
            onEdit({
                ...formData,
                id: editingRecord.id,
            }); 
            setSuccess("record updated");
            resetForm();
        } else {
            onAdd(formData);
            setSuccess("record added!");
            setError("");
            resetForm();
        }

    };

    if (!isOpen) return null;

    
    return ( 
        <>
        <div className="modal-overlay"
            onClick={onClose}
        />
        <div className="feedback-card"
            
        >
            <div className="nes-field">
                <button onClick={onClose}>
                    {/* <RxCross2 size={24} /> */}
                    [x]
                </button>
                <label htmlFor="account">ENTER ACCOUNT/PW</label>
                {/* <div className="feedback-header">
                    ENTER ACCOUNT / PW
                </div> */}
                <form onSubmit={handleSubmit} className="feedback-body" autoComplete="off">
                    <p className="field-title">Account Name</p>
                    <div className="account-wrapper">
                            
                            <IconPicker 
                                value={formData.iconKey}
                                onChange={(iconKey) =>

                                    setFormData(prev => ({
                                        ...prev,
                                        iconKey

                                    }))}
                            />
                            <input type="text" 
                                className="nes-input account-input"
                                placeholder=" name of account"
                                autoComplete=""
                                value={formData.account}
                                onChange={(e) => setFormData({...formData, account: e.target.value})}
                                required   
                            />
                    </div>
                    
                    <p className="field-title">Password</p>
                    <InputField  
                                value={formData.password}
                                onChange={(e) => 
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                })}
                                placeholder="your pw"
                                className="nes-input"
                                required
                    />
                    <p className="field-title">Confirm Password</p>
                    <InputField   
                                value={formData.confirmPw}
                                onChange={(e) => 
                                    setFormData({
                                        ...formData,
                                        confirmPw: e.target.value,
                                    })
                                }
                                placeholder="confirm pw"
                                className="nes-input"
                    />
                    <label className="field-title">
                            Description
                            <span className="tool-tip">{tooltip[0].description}</span>
                    </label>
                    <textarea type="text" 
                            className="nes-textarea" 
                            placeholder="comments"
                            autoComplete="off"
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            required
                    >
                        
                    </textarea>
                    
                    {success && <p className="nes-text is-success"><FaCheck />{success}</p>}
                    {error && <p className="nes-text is-error">{error}</p>}
                    <button 
                        className="nes-btn is-primary"
                        
                    >{editingRecord ? "UPDATE" : "SAVE"}</button>
                </form>
            </div>
        </div>
        </>
        
        
     );
}
 
export default RetroForm;
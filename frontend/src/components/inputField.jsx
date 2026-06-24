import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const InputField = ({ placeholder, value, onChange, className }) => {
    const [showPassword, setShowPassword] = useState(false)

    return ( 
        <div className="password-field">
            <input type={showPassword ? "text" : "password"}
                    className={className} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    
            />
            <button type="button"
                    onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <FaEyeSlash /> : <FaEye /> }
            </button>
        </div>
     );
}
 
export default InputField;
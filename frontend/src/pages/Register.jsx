import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/authApi";
import InputField from "../components/inputField";
import { Link } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password:"",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");
        setLoading(true);
        
        try {

            const response = await register(formData);

            console.log(response.data);

            setSuccess("Account created successfully")

            setTimeout(() => {
                navigate("/");
            }, 2000);
            

            setFormData({
                username: "",
                email: "",
                password:"",
            })

        } catch (err) {
            console.error(err.response);
            setError(err.response?.data?.message ||
                "Registration failed." )
            } finally {
                setLoading(false);
            }

        }

    return ( 
        <div className="feedback-login">
            <div className="nes-container is-centered">
                <p>
                     Register
                </p> 
                <form onSubmit={handleSubmit} className="feedback-body" autoComplete="off">
                    <div className="nav-brand">
                        <a href="http://localhost:5173/">
                            <p>Password Keeper</p>
                            <i className="nes-logo"></i>
                        </a>
                        
                    </div>
                    <div className="nes-field is-inline">
                        <label htmlFor="inline_field">email</label>
                        <input type="email" 
                                id="name_field"
                                placeholder="email" 
                                className="nes-input"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                        />
                    </div>
                    <div className="nes-field is-inline">
                        <label htmlFor="inline_field">username</label>
                        <input type="text" 
                                id="name_field" 
                                className="nes-input"
                                placeholder="username"
                                value={formData.username}
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                                required
                    />
                    </div>
                    
                    <div className="nes-field is-inline">
                        <label htmlFor="inline_field">password</label>
                        <InputField type="text" 
                                    id="name_field" 
                                    className="nes-input" 
                                    placeholder="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    required
                        />
                    </div>
                    <button className="nes-btn is-success"
                            disabled={loading}
                    >
                        {loading ? "add user..." : "Register"}
                    </button>
                    {success && <span className="nes-text is-success">{success}</span>}
                    {error &&  <span className="nes-text is-error">
                                        {error}.{""}
                                </span>}
                                <Link to="/">
                                    login here
                                </Link>
                </form>
            </div>
        </div>
     );
}
 
export default Register;
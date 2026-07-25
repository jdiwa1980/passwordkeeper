import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { login } from "../api/authApi";
import InputField from "../components/inputField";
import { Link } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {

            const response = await login(formData);
            
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", response.data.username);

            navigate("/dashboard")

        } catch (err) {
                console.error(err.response);
                setError(err.response?.data?.message ||
                "Login failed." )
                } finally {
                setLoading(false);
            }
    }

    return (  
        <div className="feedback-login">
            <div className="nes-field">
                    <div className="message">
                        <section className="message -left">
                            {/* Balloon  */}
                            <div className="nes-balloon from-left">
                                <p>Login to Password Keeper</p>
                            </div>
                            {/* Octocat  */}
                            <i className="nes-octocat"></i>
                            
                        </section>
                    </div>
                        
                <form onSubmit={handleSubmit} className="feedback-body" autoComplete="off">
                    <input type="email" 
                           className="nes-input"
                           placeholder="email"
                           autoComplete=""
                           value={formData.email}
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                           required
                    />
                    <InputField type="password" 
                           className="nes-input"
                           placeholder="password"
                           autoComplete=""
                           value={formData.password}
                           onChange={(e) => setFormData({...formData, password: e.target.value})}
                           required
                    />
                    
                    <button className="nes-btn is-primary"
                            disabled={loading}
                    >{loading ? "Logging in.." : "Login"}</button>
                </form>
                <div className="nes-container register">
                    {error &&  <span className="nes-text is-error">
                                        {error}.
                                </span>}
                    <p>
                        Don't have an Account yet?
                        <Link to="/register">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Login;
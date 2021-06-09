import {useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import './Register.scss';

export default function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("/auth/register", {
            fullName,
            email,
            password,
          });
          res.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
      };
    

    return (
        <div className="registerDiv">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleRegister}>

            <input 
                className="registerInput" 
                type="text" 
                placeholder="Full Name"
                required
                onChange={e=>setFullName(e.target.value)}
            />
            <input 
                className="registerInput" 
                type="text" 
                placeholder="Email Address"
                required
                onChange={e=>setEmail(e.target.value)}
            />
            <input 
                className="registerInput" 
                type="password"
                placeholder="Password"
                required
                onChange={e=>setPassword(e.target.value)}
            />
            {/* <input 
                className="registerInput" 
                type="password" 
                placeholder="Confirm Password"
            /> */}
            <button className="registerButton" type="submit">register</button>
        </form>
        <button className="loginButton">
            <Link to="/login" style={{ textDecoration: "none", color:" black" }}>Login</Link>
        </button>
        {error && <span>Something went wrong!</span> }
    </div>
    )
}

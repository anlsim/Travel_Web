import {useState} from 'react';
import axios from "axios";
import './Register.scss';

export default function Register() {
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     setError(false);
    //     try {
    //       const res = await axios.post("/auth/register", {
    //         fullName,
    //         email,
    //         password,
    //       });
    //       res.data && window.location.replace("/login");
    //     } catch (err) {
    //       setError(true);
    //     }
    //   };
    

    return (
        <div className="registerDiv">
        <span className="registerTitle">Request Access</span>
        <form className="registerForm" action= "mailto:anlsimental@gmail.com">

            <input 
                className="registerForm-input" 
                type="text" 
                placeholder="Full Name"
                required
                // onChange={e=>setFullName(e.target.value)}
            />
            <input 
                className="registerForm-input" 
                type="text" 
                placeholder="Email Address"
                required
                // onChange={e=>setEmail(e.target.value)}
            />
            {/* <input 
                className="registerForm-input" 
                type="password"
                placeholder="Password"
                required
                onChange={e=>setPassword(e.target.value)}
            /> */}
            <button className="registerForm-button" type="submit">Send Request</button>
        </form>
        {/* <button className="loginButton">
            <Link to="/login" style={{ textDecoration: "none", color:" black" }}>Login</Link>
        </button> */}
        {error && <span>Something went wrong!</span> }
    </div>
    )
}

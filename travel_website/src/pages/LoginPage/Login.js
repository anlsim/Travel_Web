import React from 'react';
import {Link} from 'react-router-dom';
import "./Login.scss";

export default function Login() {
    return (
        <div className="loginDiv">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your email..."/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..."/>
                <button className="loginButton">Login</button>
            </form>
            <button className="registerButton">
                <Link to="/register" style={{ textDecoration: "none", color:" black" }}>Register</Link>
            </button>
        </div>
    )
}

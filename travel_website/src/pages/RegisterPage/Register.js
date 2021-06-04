import React from 'react';
import {Link} from 'react-router-dom';
import './Register.scss';

export default function Register() {
    return (
        <div className="registerDiv">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Full Name</label>
            <input className="registerInput" type="text" placeholder="Name"/>
            <label>Email</label>
            <input className="registerInput" type="text" placeholder="Email"/>
            <button className="registerButton">register</button>
        </form>
        <button className="loginButton">
            <Link to="/login" style={{ textDecoration: "none", color:" black" }}>Login</Link>
        </button>
    </div>
    )
}

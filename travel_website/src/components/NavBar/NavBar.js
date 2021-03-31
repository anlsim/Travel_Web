import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => (
<>


  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">TRAVEL BLOG</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
            <Link className="nav-link" to="/blog">BLOG</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/gallery">GALLERY</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/map">MAP</Link>
        </li>
       
        <li className="nav-item">
            <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
);
export default NavBar;
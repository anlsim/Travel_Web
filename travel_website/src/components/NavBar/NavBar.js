import React from 'react'
import {Link} from 'react-router-dom';
import "./NavBar.scss";


export default function NavBar() {
  const user = true;
  return (
    <>


<div className="daNAv">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TRAVEL BLOG</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        <li className="nav-item">
            <Link className="nav-link" to="/publish">{user && "PUBLISH"}</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/login">{user && "LOGOUT"}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div> 

</>
  )
}

// import React from 'react';

// const user = false;
// const NavBar = () => (



// );
// export default NavBar;
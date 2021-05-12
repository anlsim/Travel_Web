import React from 'react';

import './SideMenu.scss';
const SideMenu = () => (
    <>
    <nav className="sidenav">
        <a className="nav-link active" aria-current="page" href="/">States</a>
        <a className="nav-link" href="/">Cities</a>
        <a className="nav-link" href="/">National Parks</a>
    </nav>
    </>
);


export default SideMenu;
import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => (
<>
<Navbar bg="light" variant="light">
    <Navbar.Brand href="/">TRAVEL BLOG</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/blog">BLOG</Nav.Link>
      <Nav.Link href="/gallery">GALLERY</Nav.Link>
      <Nav.Link href="/map">MAP</Nav.Link>
      <Nav.Link href="/about">ABOUT</Nav.Link>
    </Nav>
  </Navbar>
    </>
);
export default NavBar;
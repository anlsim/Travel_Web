import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => (
<>
<Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/updates-list">Travel Updates</Nav.Link>
    </Nav>
  </Navbar>
    </>
);
export default NavBar;
import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../Components/Navbar.css'; // Assuming you have some custom styles

const Homenavbar = () => {
  return (
    <>    
    <Navbar bg="danger" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">Daily Updates</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{marginLeft:'40%'}} id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
            <Nav.Link>
              <i className="fa-solid fa-house mx-1"></i> Home
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link>
              <i className="fa-regular fa-address-card mx-1"></i> About
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/users">
            <Nav.Link>
              <i className="fa-regular fa-user mx-1"></i> Users
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news">
            <Nav.Link>
              <i className="fa-regular fa-newspaper mx-1"></i> News
            </Nav.Link>
            </LinkContainer>
           
            <LinkContainer to="/contact">
            <Nav.Link>
              <i className="fa-solid fa-phone mx-1"></i> Contact
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

  );
};

export default Homenavbar;

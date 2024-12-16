import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Etome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#values">Our Values</Nav.Link>
            <Nav.Link href="#faq">FAQs</Nav.Link>
            <Button variant="warning" className="ml-2">Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {signOut} from 'firebase/auth'
import auth from "../../../firebase.init";
import logo from '../../../images/logo-black.png'


const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar bg="light" sticky="top"  expand="lg">
        <Container className="sticky top-0">
          <Navbar.Brand as={Link} to="/"><img src={logo} alt="" height={30} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  href="/home#banner">Home</Nav.Link>
              <Nav.Link  href="/home#services" >Services</Nav.Link>
              <Nav.Link  href="/home#expert" >Expert</Nav.Link>
              
            </Nav>
            <Nav>
              {
                !user 
                  ? 
                  <>
                    <Nav.Link as={Link} to="/sign-in">Sign in</Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to="/login">
                      Login
                    </Nav.Link>
                  </>
                  : 
                  <Nav.Link as={Link} to="" onClick={() => {
                    signOut(auth)
                      .then (user => {})
                  }}>Logout</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

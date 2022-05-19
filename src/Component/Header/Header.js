import React from 'react';
import {  Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./Header.css";
import useAuth from '../Hooks/useAuth';
const Header = () => {
  const {user,logout} = useAuth();
    return (
        <>
            <Navbar className="nav-bar shadow sticky-top p-4 text-light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
          <i className="fa-solid fa-business-time fa-2x text-light"></i>
          </Navbar.Brand >
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link
                as={NavLink}
                className="nav-link text-light"
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="nav-link text-light"
                to="/aboutus"
              >
                About US
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="nav-link text-light"
                to="/services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="nav-link text-light"
                to="/contact"
              >
                Contact
              </Nav.Link>
              {!user?.email && (
                <Nav.Link
                as={NavLink}
                className="nav-link text-light"
                to="/login  "
              >
              Login 
              </Nav.Link>
              )}
              

              {user?.email && (
                
                 <Nav.Link
                 onClick={logout}
                 as={NavLink}
                 className="nav-link  text-light"
                 to="/login  "
               >
               LogOut<span>
                {user?.photoURL ? (
                  <img className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <small className="text-dark ms-3">{user?.displayName}</small>
                )}
              </span>
               </Nav.Link>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;
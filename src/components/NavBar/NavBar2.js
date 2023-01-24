import "./navBar.css";
// import profilePic from '../../images/testProfilePic.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { auth } from '../../services/firebase';



export default function NavBar2({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        auth.signOut();
        setIsLoggedIn(false);
        navigate("/login");
    }

    return (
        <>
            <div className="navBar2">
            <Navbar bg="light" expand="lg" className="navBar2">
                <Container fluid>
                    <Navbar.Brand>
                        <div className="logo">
                            <Link to="/">
                                <h1>Instagram Clone</h1>
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <div className="links">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="links">
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <Link to="/login">Login</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/signup">Sign Up</Link>
                                </Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            </div>

            <nav className="NavBar2">
                <div className="logo">
                    <Link to="/"><h1>Instagram Clone</h1></Link>
                </div>

                <div className="links">
                    {isLoggedIn == true ?
                        <>
                            <Link to="/create-message">
                                <FontAwesomeIcon icon={faPlusSquare} className="faCreateMessageIcon" />
                            </Link>
                            <Link to="/profile">Profile</Link>
                            <Link onClick={handleLogout}>Logout</Link>
                            {/* <img className="authorImage" src={profilePic} alt="AuthorIcon" crossOrigin="anonymous" /> */}
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                    }
                </div>
            </nav>
        </>
    );
}

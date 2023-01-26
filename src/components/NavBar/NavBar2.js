
import "./navBar.css";
// import profilePic from '../../images/testProfilePic.png';

import Form from 'react-bootstrap/Form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { auth } from '../../services/firebase';

export default function NavBar2({ isLoggedIn, setIsLoggedIn, darkMode, setDarkMode }) {
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
            <nav className={`NavBar2 ${darkMode ? 'NavBar2-dark-mode border-dark' : ''}`}>
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
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                            </Form>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                            </Form>
                        </>
                    }
                </div>
            </nav>
        </>
    );
}

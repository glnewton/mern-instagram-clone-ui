
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../../services/firebase';


export default function NavBar({isLoggedIn, setIsLoggedIn}) {
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
        <nav className="NavBar">
            <div className="logo">
                <Link to="/"><h1>Instagram Clone</h1></Link>
            </div>
            
            <div className="links">
                {isLoggedIn ==  true ?
                    <>
                        <Link to="/create-message">
                            <FontAwesomeIcon icon={faPlusSquare} className="faCreateMessageIcon" />
                        </Link>
                        <Link to="/profile">Profile</Link>
                        <Link onClick={handleLogout}>Logout</Link>
                    </>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </nav>
    );
}

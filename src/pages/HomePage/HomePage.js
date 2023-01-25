import "./homePage.css"

import MessageFeed from "../../components/MessageFeed/MessageFeed"

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../services/firebase';



const HomePage = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setDisplayName(currentUser.displayName);
                // setUserAvatar(currentUser.photoURL);
            } else {
                navigate("/login");
            }
        });
        return () => unsubscribe();
    }, []);

//Conditionally render the MessageFeed component depending on whether the user is logged in. If not display a message to the user to log in or register.
    return (
        <div className="homePage page">
            <h1 className="mt-3">Home Page</h1>
            {user && <MessageFeed />}
            {!user && <h3 className="mt-3">
            Please log in or register to view messages.</h3>}
        </div>
    )
}

export default HomePage


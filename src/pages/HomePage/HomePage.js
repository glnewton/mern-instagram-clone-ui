import "./homePage.css"

import MessageFeed from "../../components/MessageFeed/MessageFeed"

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../services/firebase';

const HomePage = ({ darkMode, setDarkMode }) => {
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
    console.log("Home Page darkMode: ", darkMode);
    return (
        <div className={`homePage ${darkMode ? 'homePage-dark-mode' : ''}`}>
            <h1 className="mt-3">Home Page</h1>
            {user && <MessageFeed user={user} displayName={displayName} darkMode={darkMode} setDarkMode={setDarkMode}/>}
            {!user && <h3 className="mt-3">
            Please log in or register to view messages.</h3>}
        </div>
    )
}

export default HomePage


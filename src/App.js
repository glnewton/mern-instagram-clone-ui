import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'



//Pages
import HomePage from './pages/HomePage/HomePage';
import ViewMessagePage from './pages/ViewMessagePage/ViewMessagePage';
import CreateMessagePage from './pages/CreateMessagePage/CreateMessagePage';
import EditMessagePage from './pages/EditMessagePage/EditMessagePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CompleteProfilePage from './pages/CompleteProfilePage/CompleteProfilePage';

//Components
import NavBar2 from './components/NavBar/NavBar2';


//import { auth } from './services/firebase';  /etc/secrets/<filename>.

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Router>
        <NavBar2 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <Container> */}
          <Routes>

            <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />
            <Route path="/view-message/:id" element={<ViewMessagePage isLoggedIn={isLoggedIn} currentUser={currentUser} darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path="/create-message" element={<CreateMessagePage isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />
            <Route path="/edit-message/:id" element={<EditMessagePage isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />

            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />} />

            <Route path="/profile" element={<ProfilePage isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
            <Route path="/complete-profile" element={<CompleteProfilePage/>} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
              
          </Routes>
        {/* </Container> */}
      </Router>
    </div>
  );
}

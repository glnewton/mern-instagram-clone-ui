import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

//Pages
import HomePage from './pages/HomePage/HomePage';
import ViewMessagePage from './pages/ViewMessagePage/ViewMessagePage';
import CreateMessagePage from './pages/CreateMessagePage/CreateMessagePage';
import EditMessagePage from './pages/EditMessagePage/EditMessagePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
    <Router>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view-message/:id" element={<ViewMessagePage />} />
        <Route path="/create-message" element={<CreateMessagePage/>} />
        <Route path="/edit-message/:id" element={<EditMessagePage/>} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/profile" element={<ProfilePage isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

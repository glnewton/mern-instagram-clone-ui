import './profilePage.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState, useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../../services/firebase';
import { getAuth, updateProfile } from "firebase/auth";


const ProfilePage = ({ isLoggedIn, currentUser, darkMode }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setDisplayName(currentUser.displayName);
                setPhotoURL(currentUser.photoURL);
                setEmail(currentUser.email);
            } else {
                navigate("/login");
            }
        });
        return () => unsubscribe();
    }, []);

    const handleUpdateProfile = async () => {
        try {
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL || "https://example.com/jane-q-user/profile.jpg"
            })
        }
        catch (error) {
            // An error occurred
        };
        navigate("/");
    }

    if (!user) {
        navigate("/login");
        return null;
    }

    return (
        <>
            <main className={`profilePage ${darkMode ? 'profilePage-dark-mode' : ''}`}>
                <Form className={`profilePageForm p-5 mt-5 square border col-sm-4 mx-auto my-auto h-auto w-auto ${darkMode ? 'profilePageForm-dark-mode border-dark' : 'bg-white'}`} >
                    <h1 className='mb-5'> Update Your Profile </h1>
                    <Form.Group className="mb-2" controlId="formBasicDisplayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control type="text" placeholder=" Think of a cool name..." value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPhotoURL">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Add a URL to your profile picture..." value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicNewPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleUpdateProfile}>
                        Update Profile
                    </Button>
                    <Form.Text className="text-muted mt-4">
                        Already have an account?{' '}
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </Form.Text>
                </Form>
            </main>
        </>
    );
}

export default ProfilePage;




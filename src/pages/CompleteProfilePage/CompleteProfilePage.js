import './completeProfilePage.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState, useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../../services/firebase';
import { getAuth, updateProfile } from "firebase/auth";


const CompleteProfilePage = ({ isLoggedIn, currentUser }) => {
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
            <main className="completeProfilePage">
                <Form className='p-5 mt-5 square border col-sm-4 mx-auto my-auto bg-white h-auto w-auto' >
                    <h1 className='mb-5'> Finish Setting Up Your Profile </h1>
                    <Form.Group className="mb-2" controlId="formBasicDisplayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control type="text" placeholder=" Think of a cool name..." value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPhotoURL">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Add a URL to your profile picture (from Amazon.com)..." value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                    </Form.Group>

                    {/* <Form.Group className="mb-2" controlId="formBasicEmail">
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
                    </Form.Group> */}
                    <Button variant="primary" type="submit" onClick={handleUpdateProfile}>
                        Complete Profile
                    </Button>
                </Form>
            </main>
        </>
    );
}

export default CompleteProfilePage;

// Yes, Firebase User objects have unique ids that are generated when the user is created. These ids are called uid and can be accessed using the user.uid property. The uid is a string that is guaranteed to be unique across all users of your app, and is also guaranteed to be stable for the lifetime of a user (i.e. it will not change for a user even if the user changes their email or password). This makes it useful as a key for storing user-related data in your Firebase Realtime Database or Firestore.




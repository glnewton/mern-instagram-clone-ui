import './editMessagePage.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { getMessage, editMessage } from "../../services/messages-api.js";

import { auth } from '../../services/firebase';

export default function EditMessagePage({darkMode, setDarkMode}) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');

    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState(null);
    const [messagePhotoURL, setmessagePhotoURL] = useState('');
    const [createdDate, setCreatedDate] = useState('');

    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        getMessage(id)
            .then(response => {
                console.log(response);
                setUserName(response.userName);
                setMessage(response.message);
                setmessagePhotoURL(response.imageUrl);
                setCreatedDate(response.createdDate);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, [id]);

    const editTheMessage = (event) => {
        event.preventDefault();
        const updatedMessage = {
            userName: userName,
            imageUrl: messagePhotoURL,
            message: message,
            createdDate: createdDate
        }
        editMessage(id, updatedMessage)
            .then(response => {
                console.log(response);
                navigate(`/view-message/${id}`);
            })
            .catch(error => console.log(error));
    }

    const cancelEdit = (event) => {
        event.preventDefault();
        navigate(`/view-message/${id}`);
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }
    
    return (

        <>
            <main className={`editMessagePage ${darkMode ? 'editMessagePage-dark-mode' : ''}`}>
                <Form    className={`editMessageForm p-5 mt-5 square border col-sm-4 mx-auto my-auto h-auto w-auto ${darkMode ? 'editMessageForm-dark-mode border-dark' : 'bg-white'}`} >
                    <h1 className='mb-4'> Edit Your Message </h1>
                    <img src={messagePhotoURL} alt="message" className="messageImage mb-3" />
                    <p> <b>{displayName || "anonymous"}</b>, Update the fields you want to change and click "Edit</p>
                    <Form.Group className="mb-2" controlId="formBasicImageUrl">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder=" Enter a URL for your image..." value={messagePhotoURL} onChange={(e) => setmessagePhotoURL(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder=" Enter your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                    <div className='createMessageFormButtons'>
                        <Button variant="info" type="submit" onClick={editTheMessage}>
                            Edit
                        </Button>
                        //
                        <Button variant='danger' type='submit' onClick={cancelEdit}>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </main>
        </>
    )
}




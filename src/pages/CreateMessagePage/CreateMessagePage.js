import './createMessagePage.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import moment from 'moment';

import { createMessage } from "../../services/messages-api";

import { auth } from '../../services/firebase';

export default function CreateMessagePage({darkMode, setDarkMode}) {

    const navigate = useNavigate()

    let currentDateTime = moment().format(); // 2021-09-15T20:00:00-04:00

    // User state
    const [user, setUser] = useState(null);
    const [userID, setUserID] = useState(null);
    const [displayName, setDisplayName] = useState('');
    // const [userAvatar, setUserAvatar] = useState('')

    // Message state
    const [messagePhotoURL, setmessagePhotoURL] = useState('');
    const [message, setMessage] = useState('');
    const [createdDate, setCreatedDate] = useState('');
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCreatedDate(currentDateTime);
        try {
            await createMessage({
                userName: displayName,
                // userProfileImage: user.photoURL,
                imageUrl: messagePhotoURL,
                message: message,
                createdDate: createdDate,
                likes: likes,
                comments: comments
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <main className={`createMessagePage ${darkMode ? "createMessagePage-dark-mode" : ""}`}>
                <Form className={`createMessageForm p-5 mt-5 square border col-sm-4 mx-auto my-auto bg-white h-auto w-auto ${darkMode ? "createMessageForm-dark-mode border-dark" : "bg-white"}`} >
                    <h1 className='mb-4'> Create Message </h1>
                    <img src={messagePhotoURL} alt="Fix your message" className="messageImage mb-3" />
                    <p> <b>{displayName || "anonymous"}</b>, create your message below </p>
                    <Form.Group className="mb-2" controlId="formBasicImageUrl">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder=" Enter a URL for your image..." value={messagePhotoURL} onChange={(e) => setmessagePhotoURL(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder=" Enter your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                    <div className='createMessageFormButtons'>
                        <Button variant="success" type="submit" onClick={handleSubmit}>
                            Create
                        </Button>
                        <Button variant='danger'>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </main>
        </>
    )
}


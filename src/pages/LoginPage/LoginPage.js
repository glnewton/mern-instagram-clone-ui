import './loginPage.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';


const LoginPage = ({ setIsLoggedIn, darkMode, setDarkMode }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setIsLoggedIn(true);
                navigate("/")
                console.log(user);
                //user.displayName = "John Doe";
                //user.photoURL = "https://example.com/jane-q-user/profile.jpg";
                //user.email 
                //user.uid
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <>
            {/* <main className="loginPage"> */}
            <main className={`loginPage ${darkMode ? 'loginPage-dark-mode' : ''}`}>
                    {/* <Container> */}
                    {/* <Form className='p-5 square border col-sm-4  mx-auto my-auto h-auto bg-white' > */}
                    <Form className={`loginForm p-5 square border col-sm-4 mx-auto my-auto h-auto ${darkMode ? 'loginForm-dark-mode border-dark' : 'bg-white'}`} >
                    <h1 className='mb-5'> Login </h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else*.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <Form.Text className="text-muted">
                                Hurry up, we need your data!
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={onLogin}>
                            Login
                        </Button>
                        <Form.Text className="text-muted mt-4">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </Form.Text>
                    </Form>
                    {/* </Container> */}
            </main>

        </>
    )
}

export default LoginPage
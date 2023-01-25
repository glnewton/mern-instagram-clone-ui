import './signUpPage.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

const SignUpPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate("/login")
        } catch (error) {
            // Handle different error codes
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('The email address is already in use by another account.');
                    break;
                case 'auth/invalid-email':
                    alert('The email address is not valid.');
                    break;
                case 'auth/operation-not-allowed':
                    alert('Email/password accounts are not enabled.');
                    break;
                case 'auth/weak-password':
                    alert('The password is not strong enough.');
                    break;
                default:
                    alert('An error occurred. Please try again later.');
                    console.error(error);
            }
        }
    }

    return (
        <>
            <main className="signUpPage">
                <Form className='p-5 square border col-sm-4  mx-auto my-auto h-auto bg-white' >
                    <h1 className='mb-5'> Sign Up </h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                            Join us...
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Create Account
                    </Button>
                    <Form.Text className="text-muted mt-4">
                        Already have an account?{' '}
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </Form.Text>
                </Form>
            </main>


            {/* <main className="signUpPage page">
                <section>
                    <div className="signUpFormContainer">
                        <h1> Sign Up </h1>
                        <div className="signUpForm">
                            <form>
                                <div className="signUpFormInput">
                                    <div className="signUpFormFields">
                                        <div>
                                            <label htmlFor="email-address">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                label="Email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="Email address"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                label="Create password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                placeholder="Password"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="signUpFormButtons">
                                    <button
                                        type="submit"
                                        onClick={onSubmit}
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login" >
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </section>
            </main> */}
        </>
    )
}

export default SignUpPage
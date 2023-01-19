import './loginPage.css';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { NavLink, useNavigate } from 'react-router-dom'

const LoginPage = ({setIsLoggedIn}) => {
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
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (

        <main className="loginPage page">
            <section>
                <div className="loginFormContainer">
                    <h1> Login </h1>
                    <div className="loginForm">
                        <form>
                            <div className="loginFormInput">
                                <div className="loginFormFields">
                                    <div>
                                        <label htmlFor="email-address">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Email address"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="loginFormButtons">
                                    <button
                                        onClick={onLogin}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>

                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default LoginPage
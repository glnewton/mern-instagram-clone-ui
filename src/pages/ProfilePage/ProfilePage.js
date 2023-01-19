import './profilePage.css'
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../services/firebase';

const ProfilePage = ({isLoggedIn, currentUser}) => {
    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setDisplayName(currentUser.displayName);
                setEmail(currentUser.email);
            } else {
                // redirect to login if not logged in
            }
        });
        return () => unsubscribe();
    }, []);

    const handleUpdateProfile = async () => {
        try {
            const updatedUser = auth.currentUser;
            await updatedUser.updateEmail(email);
            await updatedUser.updatePassword(password);
            await updatedUser.updateProfile({ displayName });
            alert("Profile updated successfully!");
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('The email address is already in use by another account.');
                    break;
                case 'auth/invalid-email':
                    alert('The email address is not valid.');
                    break;
                case 'auth/wrong-password':
                    alert('The password is incorrect.');
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

    if (!user) return null;

    return (
        <main className="profilePage page">
            <section>
                <div className="profileFormContainer">
                    <h1> Profile </h1>
                    <div className="profileForm">
                        <form>
                            <div className="profileFormInput">
                                <div className="profileFormFields">
                                    <div>
                                        <label htmlFor="display-name">
                                            Display name
                                        </label>
                                        <input

                                            type="text"
                                            label="Display name"
                                            value={displayName}
                                            onChange={(e) => setDisplayName(e.target.value)}
                                            required
                                            placeholder="Display name"
                                        />
                                    </div>
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
                                            label="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="new-password">
                                            New password
                                        </label>
                                        <input
                                            type="password"
                                            label="New password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                            placeholder="New password"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="profileFormButtons">
                                <button
                                    type="button"
                                    onClick={handleUpdateProfile}
                                >
                                    Update profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProfilePage;
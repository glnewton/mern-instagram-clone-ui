import './profilePage.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../services/firebase';
import { getAuth, updateProfile } from "firebase/auth";


const ProfilePage = ({ isLoggedIn, currentUser }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');

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
        try{
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: displayName, 
                photoURL: photoURL || "https://example.com/jane-q-user/profile.jpg"
            })
        }   
        catch(error) {
            // An error occurred
        };
        navigate("/");
    }

    // const handleUpdateProfile = async () => {
    //     console.log("handleUpdateProfile clicked")
    //     try {
    //         const updatedUser = auth.currentUser;
    //         const credential = auth.EmailAuthProvider.credential(
    //             updatedUser.email,
    //             password
    //         );
    //         await updatedUser.reauthenticateWithCredential(credential);
    //         await updatedUser.updateEmail(email);
    //         await updatedUser.updatePassword(newPassword);
    //         await auth.currentUser.updateProfile({displayName: displayName});
    //         console.log("updatedUser", updatedUser)
    //         alert("Profile updated successfully!");
    //     } catch (error) {
    //         // Handle different error codes
    //     }
    // }



    if (!user) {
        navigate("/login");
        return null;
    }

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
                                    Update Profile
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
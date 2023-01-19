// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRghRTT2qkXymNisdVN2SiQjMOD2FqPjE",
  authDomain: "mern-instagram-clone-bb8e1.firebaseapp.com",
  projectId: "mern-instagram-clone-bb8e1",
  storageBucket: "mern-instagram-clone-bb8e1.appspot.com",
  messagingSenderId: "614554747614",
  appId: "1:614554747614:web:9ed8e7f42d68742a9c384f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
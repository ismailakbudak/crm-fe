// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-ZVgqgIT9qDsx35YNm4CxwgqRQN3Se8c",
    authDomain: "react-app-crm.firebaseapp.com",
    projectId: "react-app-crm", // import.meta.env.VITE_FIREBASE_PROJECT_ID
    storageBucket: "react-app-crm.firebasestorage.app",
    messagingSenderId: "704826023045",
    appId: "1:704826023045:web:d65a0081305e5f16779dec",
    measurementId: "G-S0SVV70TPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);

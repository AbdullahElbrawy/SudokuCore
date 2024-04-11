// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiL1hpsMFt9ff5O8YL8iSNTEOe0XsTsGg",
  authDomain: "sudokucore.firebaseapp.com",
  projectId: "sudokucore",
  storageBucket: "sudokucore.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "sudokucore",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
export const db = getFirestore(app);

// Get a reference to the authentication service
const firebaseAuth = getAuth(app);

export default firebaseAuth;

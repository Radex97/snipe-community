// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBZ4cbAhuOon7floeIRPGdAAfflXcZx5hs",
  authDomain: "snipe-community.firebaseapp.com",
  projectId: "snipe-community",
  storageBucket: "snipe-community.firebasestorage.app",
  messagingSenderId: "618728427752",
  appId: "1:618728427752:web:1a90c62d4a5bde02ebf95d",
  measurementId: "G-REND108Y8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPskIXpYjN7fACOYtwehsecD7qLfJbIj0",
  authDomain: "job-portal-a5694.firebaseapp.com",
  projectId: "job-portal-a5694",
  storageBucket: "job-portal-a5694.appspot.com", // Fixed this line
  messagingSenderId: "62288669220",
  appId: "1:62288669220:web:d17f3ea0982abf2acdc6b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

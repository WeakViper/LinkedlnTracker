// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsWEbMyhdBUOeRKDwLvfSO9o6B8InQ8TY",
  authDomain: "linkedin-a106b.firebaseapp.com",
  projectId: "linkedin-a106b",
  storageBucket: "linkedin-a106b.appspot.com",
  messagingSenderId: "198869373921",
  appId: "1:198869373921:web:95d309e4fed5d068c078a0",
  measurementId: "G-T589Z4RLTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

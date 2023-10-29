// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,} from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7FKnhwis0264Kp9X00vXkQBWDmHxIl2Q",
  authDomain: "hari-facebook-clone.firebaseapp.com",
  projectId: "hari-facebook-clone",
  storageBucket: "hari-facebook-clone.appspot.com",
  messagingSenderId: "1011621497099",
  appId: "1:1011621497099:web:464e268235305220ab7a0e",
  measurementId: "G-K8WH7FQFQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth =getAuth(app)
export const provider = new GoogleAuthProvider();

export default db;
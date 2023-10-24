// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0kSz5w1O2YeIakKNSFJ9rYjwfE6Pbfws",
  authDomain: "suthan-facebook.firebaseapp.com",
  projectId: "suthan-facebook",
  storageBucket: "suthan-facebook.appspot.com",
  messagingSenderId: "958538685544",
  appId: "1:958538685544:web:ac991102d321245bb4afdd",
  measurementId: "G-2RVN8YYV9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
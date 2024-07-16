// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4NsX7lFEJyuRKqVZIxoLSXfSj_UG599s",
  authDomain: "mybook-47213.firebaseapp.com",
  projectId: "mybook-47213",
  storageBucket: "mybook-47213.appspot.com",
  messagingSenderId: "124185332847",
  appId: "1:124185332847:web:9dbb936fb64a37cb80519a",
  measurementId: "G-W37KY7D3X6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
const provider = new GoogleAuthProvider();

export { app, analytics, auth, db, storage, provider };

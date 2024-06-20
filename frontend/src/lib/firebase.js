// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app"
import "firebase/compat/auth" 

const firebaseConfig = {
  apiKey: "AIzaSyB4NsX7lFEJyuRKqVZIxoLSXfSj_UG599s",
  authDomain: "mybook-47213.firebaseapp.com",
  projectId: "mybook-47213",
  storageBucket: "mybook-47213.appspot.com",
  messagingSenderId: "124185332847",
  appId: "1:124185332847:web:9dbb936fb64a37cb80519a",
  measurementId: "G-W37KY7D3X6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
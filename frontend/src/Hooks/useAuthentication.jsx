// useAuthentication.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth, provider, db } from "../lib/firebase";

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);
      localStorage.setItem("gmail", userCredential.user.email);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const signInWithEmailAndPasswordFunc = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const createUserWithEmailAndPasswordFunc = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await db.collection("users").doc(user.uid).set({
        email: user.email,
        uid: user.uid,
      });
      setUser(user);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const signOut = async () => {
    setUser(null);
    await localStorage.removeItem("gmail");
    await firebaseSignOut(auth);
    navigate("/login");
  };

  return {
    user,
    error,
    signInWithGoogle,
    signInWithEmailAndPassword: signInWithEmailAndPasswordFunc,
    createUserWithEmailAndPassword: createUserWithEmailAndPasswordFunc,
    signOut,
  };
};

export default useAuthentication;

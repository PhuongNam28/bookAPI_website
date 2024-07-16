import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../lib/firebase";

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const signOut = async () => {
    setUser(null);
    await localStorage.removeItem("gmail");
    auth.signOut();
    navigate("/login");
  };

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

  return {
    user,
    error,
    signInWithGoogle,
    signOut,
  };
};

export default useAuthentication;

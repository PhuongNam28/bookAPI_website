import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
 
  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);
      localStorage.setItem('gmail', userCredential.user.email);
      return true; 
    } catch (err) {
      setError(err.message);
      return false; 
    }
  };

  const signOut = () => {
    auth.signOut();
    setUser(null);
    localStorage.removeItem('gmail');
    navigate('/login'); 
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
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
    signInWithEmailAndPassword,
    signInWithGoogle,
    signOut
  };
};

export default useAuthentication;

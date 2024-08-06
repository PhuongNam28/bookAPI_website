import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthentication from "./useAuthentication";

const errorMessages = {
  'auth/invalid-credential': "Invalid email or password. Please try again.",
  'auth/invalid-email+password': "Invalid email or password. Please try again.",
  'auth/user-not-found': "User not found. Please sign up first.",
  'auth/weak-password': "Password should be at least 6 characters long.",
  'auth/email-already-in-use': "Email already in use. Please sign up with a different email.",
  'auth/operation-not-allowed': "Operation not allowed. Please enable it in your Firebase project settings.",
  'auth/too-many-requests': "Too many requests",
  'auth/error': "Login Error: Please try again.",
  'gg/error': "Google login failed! Please try again.",
};

const useAuth = () => {
  const { signInWithEmailAndPassword, signInWithGoogle } = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const success = await signInWithEmailAndPassword(email, password);
      if (success) {
        navigate("/");
      } else {
        toast.error(errorMessages['auth/invalid-credential']);
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(errorMessages['auth/error']);
    }
  };

  const handleGoogleClick = async () => {
    const success = await signInWithGoogle();
    console.log(success)
    if (success) {
      navigate("/");
    } else {
      toast.error(errorMessages['gg/error']);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleGoogleClick,
  };
};

export default useAuth;

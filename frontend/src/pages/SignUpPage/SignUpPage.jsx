import React, { useState } from "react";
import "./signuppage.css";
import { toast } from "react-toastify";
import useAuthentication from "../../Hooks/useAuthentication";
import Notification from "../../Components/Notification/Notification";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase"; // Ensure your Firestore instance is imported here
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

function RegisterPage() {
  const { signInWithGoogle } = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User:", user);

      // Save user information to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        password: password
      });

      navigate("/");
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("Error creating account, please try again!!!");
    }
  };

  const handleClick = async () => {
    const success = await signInWithGoogle();
    if (success) {
      navigate("/");
    } else {
      toast.error("Google login failed! Please try again.");
    }
  };

  return (
    <div className="loginContainer">
      <form className="formLogin" onSubmit={handleRegister}>
        <h1>Register Page</h1>
        <label>Email</label>
        <input
          className="userEmail"
          type="email"
          placeholder="Enter user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="userPassword"
          type="password"
          placeholder="Enter user password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Sign Up
        </button>
        <button className="googleButton" type="button" onClick={handleClick}>
          Sign In With Google
        </button>
        <div className="signupLink">
          <Link to="/login">Have an account? Log In</Link>
        </div>
      </form>
      <Notification />
    </div>
  );
}

export default RegisterPage;

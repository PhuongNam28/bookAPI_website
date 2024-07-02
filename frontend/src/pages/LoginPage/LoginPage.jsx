<<<<<<< Updated upstream
import React from 'react';
import './loginpage.css';
import { toast } from 'react-toastify';
import useAuthentication from '../../Hooks/useAuthentication'
import HomePage from '../HomePage/HomePage';
import Notification from '../../Components/Notification/Notification';

function LoginPage() {
  const {
    user,
    error,
    signInWithEmailPassword,
    signInWithGoogle,
    signOut
  } = useAuthentication();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    const success = await signInWithEmailPassword(email, password);
    if (success) {
      toast.success("Login successful!");
    } else {
      toast.error("Hey! Wrong password or username! Please log in again");

    }
=======
import React, { useState } from "react";
import "./loginpage.css";
import { toast } from "react-toastify";
import useAuthentication from "../../Hooks/useAuthentication";
import Notification from "../../Components/Notification/Notification";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { signInWithGoogle } = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch(() => {
        toast.error("Wrong Password or UserName, Please try again!!!");
      });
>>>>>>> Stashed changes
  };

  const handleClick = async () => {
    const success = await signInWithGoogle();
    if (success) {
<<<<<<< Updated upstream
      toast.success("Google login successful!");
      
=======
      navigate("/");
>>>>>>> Stashed changes
    } else {
      toast.error("Google login failed! Please try again.");
    
    }
  };

  return (
<<<<<<< Updated upstream
    <>
      {user ? (
        <HomePage />
      ) : (
        <div className="loginContainer">
          <form className="formLogin" onSubmit={handleLogin}>
            <h1>Login</h1>
            <label>Email</label>
            <input className="userEmail" type="text" placeholder="Enter user email" name="email" />
            <label>Password</label>
            <input className="userPassword" type="password" placeholder="Enter user password" name="password" />
            <button className="loginButton" type="submit">Sign In</button>
            <button className="googleButton" type="button" onClick={handleClick}>Sign In With Google</button>
            <a href="#">Forgot password?</a>
            <div className="socialButtons">
              <button className="facebook">F</button>
              <button className="twitter">T</button>
              <button className="google">G</button>
            </div>
            <div className="signupLink">
              <a href="#">Sign Up</a>
            </div>
          </form>
          <Notification/>
        </div>
      )}
    </>
=======
    <div className="loginContainer">
      <form className="formLogin" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          className="userEmail"
          type="email"
          placeholder="Enter user email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="userPassword"
          type="password"
          placeholder="Enter user password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Sign In
        </button>
        <button className="googleButton" type="button" onClick={handleClick}>
          Sign In With Google
        </button>
        <a href="#">Forgot password?</a>
        <div className="socialButtons">
          <button className="facebook">F</button>
          <button className="twitter">T</button>
          <button className="google">G</button>
        </div>
        <div className="signupLink">
          <a href="#">Sign Up</a>
        </div>
      </form>
      <Notification />
    </div>
>>>>>>> Stashed changes
  );
}

export default LoginPage;

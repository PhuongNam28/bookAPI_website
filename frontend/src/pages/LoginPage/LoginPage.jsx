import React, { useState } from "react";
import "./loginpage.css";
import { toast } from "react-toastify";
import useAuthentication from "../../Hooks/useAuthentication";
import Notification from "../../Components/Notification/Notification";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const { signInWithGoogle } = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User:", user);
      navigate("/");
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        toast.error("Account does not exist. Please register before logging in.");
      } else if (error.code === 'auth/invalid-email') {
        toast.error("Wrong Password. Please try again.");
      } else {
        toast.error("Login Error: Please try again.");
      }
      console.error("Login Error:", error);
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
      <form className="formLogin" onSubmit={handleLogin}>
        <h1>Login</h1>
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
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
      <Notification />
    </div>
  );
}

export default LoginPage;

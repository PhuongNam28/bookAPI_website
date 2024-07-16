import React, { useState } from "react";
import "./signuppage.css";
import { toast } from "react-toastify";
import useAuthentication from "../../Hooks/useAuthentication";
import Notification from "../../Components/Notification/Notification";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const { createUserWithEmailAndPassword, signInWithGoogle } =
    useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const success = await createUserWithEmailAndPassword(email, password);
      if (success) {
        navigate("/");
      } else {
        toast.error("Error creating account, please try again!!!");
      }
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

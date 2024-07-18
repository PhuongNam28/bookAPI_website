  import React, { useState } from "react";
  import "./loginpage.css";
  import { toast } from "react-toastify";
  import useAuthentication from "../../Hooks/useAuthentication";
  import Notification from "../../Components/Notification/Notification";
  import { useNavigate } from "react-router-dom";
  import Login from "@react-login-page/page10";
  import {
    Email,
    Password,
    Submit,
  } from "@react-login-page/page10";
  import LoginInnerBgImg from "@react-login-page/page10/inner-bg.jpg";

  function BookLoginPage() {
    const { signInWithEmailAndPassword, signInWithGoogle } = useAuthentication();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
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
    const handleLogin = async (e) => {
      e.preventDefault();

      console.log("Email:", email);
      console.log("Password:", password);
      

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
      if (success) {
        navigate("/");
      } else {
        toast.error(errorMessages['gg/error']);
      }
    };

    return (
      <>
        <Login
          onSubmit={handleLogin}
          style={{
            height: "100vh",
            '--login-inner-height': '500px',
            backgroundImage: `url("https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?cs=srgb&dl=pexels-minan1398-694740.jpg&fm=jpg")`,
          }}
        >
          <Login.InnerBox
            style={{ backgroundImage: `url(${LoginInnerBgImg})` }}
          />
          <Login.InnerBox
            panel="signup"
            style={{ backgroundImage: `url(${LoginInnerBgImg})` }}
          />
          <Password
            type="password"
            placeholder="Enter user password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="userPassword"
          />
          <Email
            type="email"
            placeholder="Enter user email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="userUserName"
          />
          <Submit onClick={handleLogin} keyname="submit">Sign In</Submit>
          <Submit style={{display:"inline-block"}} onClick={handleGoogleClick} keyname="google">
            Sign In With Google
          </Submit>
        </Login>

        <Notification />
      </>
    );
  }

  export default BookLoginPage;

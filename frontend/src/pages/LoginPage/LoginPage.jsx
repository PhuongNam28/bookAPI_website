import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../lib/firebase';
import HomePage from "../HomePage/HomePage";
import Notification from '../../Components/Notification/Notification';
import { toast } from 'react-toastify';

function LoginPage() {
  const [gmail, setGmail] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password)

      // setEmail(localStorage.getItem('email'));
      toast.success("OK")
      navigate('/');
      // console.log(email)

      // window.location('/')
    } catch (err) {
      toast.error("Hey! Wrong password or username! Please log in again")
    }
  };

  const handleClick = async () => {
    signInWithPopup(auth, provider)
      .then((data) => {
      setGmail(data.user.email);
      localStorage.setItem('gmail', data.user.email);
    });
  };

  useEffect(() => {
    setGmail(localStorage.getItem('gmail'));
  }, []);

  return (
    <>
      {gmail || email ? (
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
  );
}

export default LoginPage;

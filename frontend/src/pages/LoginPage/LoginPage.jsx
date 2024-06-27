import React, { useState } from 'react';
import './loginpage.css';
import { toast } from 'react-toastify';
import useAuthentication from '../../Hooks/useAuthentication'
import HomePage from '../HomePage/HomePage';
import Notification from '../../Components/Notification/Notification';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/actions';


function LoginPage() {
  const {
    user,
    signInWithGoogle,
    signOut
  } = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    dispatch(logIn(user));
    navigate("/confirm")
    })
    .catch((error) => {
      toast.error("Failed! Please try again.");
    });
  }

  const handleClick = async () => {
    const success = await signInWithGoogle();
    if (success) {
      toast.success("Google login successful!");
    } else {
      toast.error("Google login failed! Please try again.");
    }
  };

  return (
        <div className="loginContainer">
          <form className="formLogin" onSubmit={handleLogin}>
            <h1>Login</h1>
            <label>Email</label>
            <input className="userEmail" type="email" placeholder="Enter user email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input className="userPassword" type="password" placeholder="Enter user password" name="password" onChange={(e)=>setPassword(e.target.value)} />
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
  );
}

export default LoginPage;

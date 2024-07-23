import React from "react";
import "./loginpage.css";
import useAuth from "../../Hooks/useAuth";
import Notification from "../../Components/Notification/Notification";
import Login from "@react-login-page/page10";
import {
  Email,
  Password,
  Submit,
} from "@react-login-page/page10";
import LoginInnerBgImg from "@react-login-page/page10/inner-bg.jpg";
import "./loginpage.css"
function BookLoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleGoogleClick,
  } = useAuth();

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
          className="passwordHolder"
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

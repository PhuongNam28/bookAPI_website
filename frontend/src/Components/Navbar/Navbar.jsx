import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSignOutAlt,
  faCog,
  faEnvelope,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { addBookSelector } from "../../Redux/selector";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartBooks = useSelector(addBookSelector);
  const cartCount = cartBooks.reduce((count, book) => count + book.quantity, 0);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="navbarContainer">
      <div className="navbarLogo">
        <Link to={"/"}>
          <img
            className="navbarLogo"
            src={logo}
            width="80px"
            height="75px"
            alt=""
          />
        </Link>
       
      </div>
      <SearchBar />
      <div className="user">
        <div className="userAccount" onClick={handleClick}>
          <FontAwesomeIcon style={{ color: "red" }} icon={faUser} /> My account
        </div>
        <div className={`menu ${open ? "open" : ""}`}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faUserCircle} /> My Profile
            </li>
            <Link style={{ textDecoration: "none" }} to="/myorders">
              <li>
                <FontAwesomeIcon icon={faUser} /> My Orders
              </li>
            </Link>
            <li>
              <FontAwesomeIcon icon={faCog} /> Setting
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Inbox
            </li>
            <Link style={{ textDecoration: "none" }} to="/login">
              <li>
                <FontAwesomeIcon icon={faUser} /> Login
              </li>
            </Link>
            <button className="logoutButton" onClick={() => auth.signOut()}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </button>
          </ul>
        </div>
        <Link to="/added" className="userCart">
          <FontAwesomeIcon style={{ color: "red" }} icon={faShoppingCart} />{" "}
          <p style={{"padding-left": "5px"}}>Shopping Cart <span className="cartCount">{cartCount}</span> </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

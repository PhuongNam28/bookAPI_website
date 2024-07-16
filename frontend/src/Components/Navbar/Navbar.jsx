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
import logo from "../../assets/reading-book.png";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="navbarContainer">
      <div className="navbarLogo">
        <img
          className="navbarLogo"
          src={logo}
          width="50px"
          height="50px"
          alt=""
        />
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
            <Link to="/myorders">
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
            <Link to="/login">
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
          Shopping cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

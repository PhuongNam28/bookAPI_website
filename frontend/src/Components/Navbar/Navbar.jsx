import React, { useState, useEffect } from "react";
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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const cartBooks = useSelector(addBookSelector);
  const cartCount = Array.isArray(cartBooks) ? cartBooks.reduce((count, book) => count + book.quantity, 0) : 0;


  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (currentUser) {
        const userDoc = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDoc);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUserName(userData.userName || "");
          setProfileUrl(userData.profileUrl || "");
        }
      }
    };

    fetchUserProfile();
  }, [currentUser]);

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
            alt="Logo"
          />
        </Link>
      </div>
      <SearchBar />
      <div className="user">
        <div className="userAccount" onClick={handleClick}>
          {profileUrl ? (
            <div className="userProfile">
              <img src={profileUrl} alt="Profile" className="profileImage" />
              <span>{userName}</span>
            </div>
          ) : (
            <>
              <FontAwesomeIcon className="fa-icon-navbar" icon={faUser} />
              My account
            </>
          )}
        </div>
        <div className={`menu ${open ? "open" : ""}`}>
          <ul>
            <Link className="linkTo" to="/myprofile">
              <li>
                <FontAwesomeIcon icon={faUserCircle} /> My Profile
              </li>
            </Link>
            <Link className="linkTo" to="/myorders">
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
            <Link className="linkTo" to="/login">
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
          <FontAwesomeIcon className="fa-icon-navbar" icon={faShoppingCart} />{" "}
          <p>Shopping Cart <span className="cartCount">{cartCount}</span></p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

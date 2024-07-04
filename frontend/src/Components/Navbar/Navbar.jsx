import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../lib/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSignOutAlt, faCog, faEnvelope, faUserCircle, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/reading-book.png'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className='navbarContainer'>
            <div className='navbarLogo'>
                <img className="navbarLogo" src={logo} width="50px" height="50px" alt="" />
            </div>
            <div className='searchBar'>
                <img src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" alt="" />
                <input className='searchInput' type="text" placeholder='Please type in your book name' />
            </div>
            <div className='user'>
                <div className='userAccount' onClick={handleClick}>
                    <FontAwesomeIcon style={{"color":"red"}} icon={faUser} /> My account
                </div>
                <div className={`menu ${open ? 'open' : ''}`}>
                    <ul>
                        <li><FontAwesomeIcon icon={faUserCircle} /> My Profile</li>
                        <Link to="/myorders"><li><FontAwesomeIcon icon={faUser}/> My Orders</li></Link>
                        <li><FontAwesomeIcon icon={faCog} /> Setting</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> Inbox</li>
                        <Link to="/login"><li><FontAwesomeIcon icon={faUser} /> Login</li></Link>
                        <button className='logoutButton' onClick={() => auth.signOut()}><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</button>
                    </ul>
                </div>
                <Link to="/added" className='userCart'>
                    <FontAwesomeIcon style={{"color":"red"}} icon={faShoppingCart} /> Shopping cart
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

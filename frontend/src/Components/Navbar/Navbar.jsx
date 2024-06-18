import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [open,setOpen] = useState(false)
    const handleClick = ()=>
        {
            setOpen(!open)
        }
  return (
    <div className='navbarContainer'>
        <div className='navbarLogo'>
            <img src="https://i.pinimg.com/564x/a9/60/1f/a9601f59fc9da631ca5db8120bd8ba1e.jpg" width="50px" height="50px" alt="" />
        </div>
        <div className='searchBar'>
            <img src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" alt="" />
            <input className='searchInput' type="text" placeholder='Please type in your book name' />
        </div>
        <div className='user'>
            <div className='userAccount' onClick={handleClick}>My account</div>
            <div className={`menu ${open ? 'open' : '' }`} >
                <ul>
                    <li>My Profile</li>
                    <li>My Order</li>
                    <li>Setting</li>
                    <li>Inbox</li>
                    <Link to="/login"><li>Login</li></Link>
                    <button>Log Out</button>
                </ul>
            </div>
           
            <Link to="/added" className='userCart'>Shopping cart</Link>
        </div>
    </div>
  )
}

export default Navbar
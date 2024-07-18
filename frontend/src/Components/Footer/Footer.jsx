import React from 'react'


function Footer() {
  return (
    <>
    <hr className='footerHR' />
    <div className='footerContainer'>
        <div className="col">
            <p className='footerHeader'>Company</p>
            <a href="#"><p>About Us</p></a>
            <a href="#"><p>Carreer</p></a>
            <a href="#"><p>Blog</p></a>
            <a href="#"><p>Contact Us</p></a>
        </div>
        <div className="col">
            <p className='footerHeader'>Policies</p>
            <a href="#"><p>Priivate Policies</p></a>
            <a href="#"><p>Terms of Use</p></a>
            <a href="#"><p>Secure Shopping</p></a>
            <a href="#"><p>Copyrigt Policies</p></a>
        </div>
        <div className="col">
            <p className='footerHeader'>Helps</p>
            <a href="#"><p>Payment</p></a>
            <a href="#"><p>Shipping</p></a>
            <a href="#"><p>Return</p></a>
            <a href="#"><p>FAQ</p></a>
        </div>
        <div className="col">
            <p className='footerHeader'>Misc</p>
            <a href="#"><p>Affiliate</p></a>
            <a href="#"><p>Sitemap</p></a>
        </div>
    </div>
    </>
    
  )
}

export default Footer
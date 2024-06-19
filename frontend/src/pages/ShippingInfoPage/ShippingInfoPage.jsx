import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import List from '../../Components/List/List'
import Footer from '../../Components/Footer/Footer'
import ShippingInfo from '../../Components/ShippingInfo/ShippingInfo'
function ShippingInfoPage() {
  return (
    <div>  
        <Navbar/>
        <List/>
        <ShippingInfo/>
        <Footer/> 
    </div>
  )
}

export default ShippingInfoPage
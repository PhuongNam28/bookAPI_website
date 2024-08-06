import React from 'react'
import Navbar from "../../Components/Navbar/index";
import List from "../../Components/List/index";
import Footer from "../../Components/Footer/index";
import MyOrders from "../../Components/MyOrders/MyOrders";

function MyOrdersPage() {
  return (
    <div>
      <Navbar />
      <List />
      <MyOrders />
      <Footer></Footer>
    </div>
  )
}

export default MyOrdersPage
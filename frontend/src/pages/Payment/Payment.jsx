import React from 'react'
import Navbar from "../../Components/Navbar/index";
import List from "../../Components/List/index";
import Footer from "../../Components/Footer/index";
import PaymentMethod from "../../Components/PaymentMethod/PaymentMethod";
import HistoryTable from "../../Components/HistoryTable/HistoryTable";
import TextSlider from "../../Components/TextSlider/TextSlider";

function Payment() {
  return (
    <div>
      <TextSlider></TextSlider>
      <Navbar></Navbar>
      <List></List>
      <PaymentMethod></PaymentMethod>
      <HistoryTable></HistoryTable>
      <Footer></Footer>
    </div>
  )
}

export default Payment
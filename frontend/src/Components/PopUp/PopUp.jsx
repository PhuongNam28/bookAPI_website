import React from 'react';
import './popup.css';
import payment from "../../assets/Payment/pay1.jpg";

const PopUp = ({ message }) => {
  return (
    <div className="popup">
      <p>{message}</p>
      <img src={payment} alt="Payment Discount" className="popup-image" />
    </div>
  );
};

export default PopUp;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './paymentmethod.css';
import usePayment from '../../Hooks/usePayment';
import PopUp from '../../Components/PopUp/PopUp'; 

function PaymentMethod() {
  const { subTotal, handlePayCard, handlePayCash } = usePayment();

  return (
    <div className="payment-container">
      <PopUp message="Paying by CARD will give you a 5% discount!" />
      <h1 className="payment-title">Choose Your Payment Method</h1>
      <div className="payment-options">
        <div className="payment-option">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7K8DpFUuxQfj2GthktgXtVLZBLbNimfEPbg&s"
            alt="Cash Payment"
            className="payment-image"
          />
          <button className="payment-button cash-button" onClick={handlePayCash}>
            Pay with Cash
          </button>
        </div>
        <div className="payment-option">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYzVuw-7ZXibaYFANH41_drnLMezlQYwBDfZCKG6b8_y4hd7JDaDTPwcBDQ_G7MHCJic&usqp=CAU"
            alt="Card Payment"
            className="payment-image"
          />
          <StripeCheckout
            name='PhuongNamBookShop'
            image='https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg'
            billingAddress
            shippingAddress
            description={`Your total is $${subTotal.toFixed(2)}`}
            amount={subTotal * 100}
            className="stripe-checkout"
            token={handlePayCard}
            stripeKey="pk_test_51PDoxCP9iOG42SaVWAlBkWYOhiqHVzF6MCWn7o9HkEPVsWzoZCuScTjrmVBWmW8UtUJwSLhPQv76OPJwXYoCuF7100Z1fQ2Kky"
          >
            <button className="payment-button card-button">Pay with Card</button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;

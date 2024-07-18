import React from "react";
import { useSelector } from "react-redux";
import "./confirminfo.scss";
import { addBookSelector, addConfirmSelector } from "../../Redux/selector";
import useOrderConfirmation from "../../Hooks/useOrderConfirmation";
import review from "../../assets/Progress/review-progress.png"
function ConfirmInfo() {
  const cartBooks = useSelector(addBookSelector);
  const shippingInfo = useSelector(addConfirmSelector);
  const { user, totalQuantity, subTotal, handleConfirmOrder } = useOrderConfirmation();

  return (
    <div className="confirmInfoContainer">
      <div className="confirmInfoHeader">
        <h1>Check out your cart</h1>
      </div>
      <img src={review} className="reviewProgress" alt="" />
      <div className="confirmInfo">
        {cartBooks.length > 0 ? (
          <>
            <div className="confirmInfoLeft">
              <div className="boughtItem">
                <h4>Review your order</h4>
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Item Description</th>
                      <th>Quantity</th>
                      <th>Item Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartBooks.map((book, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{book.bookName}</td>
                        <td>{book.quantity}</td>
                        <td>${book.newPrice.toFixed(2)}</td>
                        <td>${(book.quantity * book.newPrice).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="confirmInfoRight">
              <div className="orderSummary">
                <h4>Order Summary</h4>
                <p>Items: {totalQuantity}</p>
                <p>Sub Total: ${subTotal.toFixed(2)}</p>
                <p>Shipping: Free</p>
                <p>Amount Payable: ${subTotal.toFixed(2)}</p>
              </div>
              <div className="shippingSummary">
                <h4>Shipping Information</h4>
                <p>Recipient Name: {shippingInfo.recipientName}</p>
                <p>Company Name: {shippingInfo.companyName}</p>
                <p>Street Address: {shippingInfo.streetAddress}</p>
                <p>Landmark: {shippingInfo.landmark}</p>
                <p>Country: {shippingInfo.country}</p>
                <p>City Name: {shippingInfo.cityName}</p>
                <p>Zip Code: {shippingInfo.zipCode}</p>
                <p>Mobile: {shippingInfo.mobile}</p>
                <p>Phone: {shippingInfo.phone}</p>
              </div>
              <button className="confirmButton" onClick={handleConfirmOrder}>Checkout Order</button>
            </div>
          </>
        ) : (
          <div className="confirmInfoLeft">
            <p>Nothing to show at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfirmInfo;
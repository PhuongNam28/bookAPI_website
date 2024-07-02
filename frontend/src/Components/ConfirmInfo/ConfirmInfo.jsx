import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./confirminfo.scss";
import { addBookSelector, addConfirmSelector } from "../../Redux/selector";
import { auth, db } from "../../lib/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { removeAllBooks } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import { persistor } from "../../Redux/store";
import { v4 as uuidv4 } from "uuid";

function ConfirmInfo() {
  const cartBooks = useSelector(addBookSelector);
  const shippingInfo = useSelector(addConfirmSelector);
  const [user, setUser] = useState(null);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Tính tổng số lượng và tổng giá tiền
  useEffect(() => {
    if (cartBooks.length > 0) {
      const totalQuantity = cartBooks.reduce(
        (acc, book) => acc + book.quantity,
        0
      );
      const subTotal = cartBooks.reduce(
        (acc, book) => acc + book.quantity * book.newPrice,
        0
      );
      setTotalQuantity(totalQuantity);
      setSubTotal(subTotal);
    } else {
      setTotalQuantity(0);
      setSubTotal(0);
    }
  }, [cartBooks]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleConfirmOrder = async () => {
    if (!user) {
      alert("Please log in to place an order.");
      return;
    }

    try {
      const orderId = uuidv4(); 
      const order = {
        customerId: user.uid,
        orderId: orderId,
        orderDate: new Date(),
        totalAmount: subTotal,
        status: "Pending",
        orderDetails: cartBooks.map((book) => ({
          productId: book.id,
          productName: book.bookName,
          quantity: book.quantity,
          unitPrice: book.newPrice,
          totalPrice: book.quantity * book.newPrice,
        })),
        shippingInfo: {
          recipientName: shippingInfo.recipientName,
          companyName: shippingInfo.companyName,
          streetAddress: shippingInfo.streetAddress,
          landmark: shippingInfo.landmark,
          country: shippingInfo.country,
          cityName: shippingInfo.cityName,
          zipCode: shippingInfo.zipCode,
          mobile: shippingInfo.mobile,
          phone: shippingInfo.phone,
        },
      };

      await addDoc(collection(db, "orders"), order);

      const persistOperations = [
        dispatch(removeAllBooks()),
        persistor.pause(),
        persistor.flush(),
        persistor.purge(),
      ];

      await Promise.all(persistOperations);

      alert("Order has been placed successfully!");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error adding order: ", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="confirmInfoContainer">
      <div className="confirmInfoHeader">
        <h1>Check out your cart</h1>
      </div>
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
              <button onClick={handleConfirmOrder}>Confirm Order</button>
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

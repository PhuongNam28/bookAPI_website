import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth,db } from "../lib/firebase";
import { addBookSelector, addConfirmSelector } from "../Redux/selector";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function useOrderConfirmation() {
  const cartBooks = useSelector(addBookSelector);
  const shippingInfo = useSelector(addConfirmSelector);
  const [user, setUser] = useState(null);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => { 
    if (cartBooks.length > 0) {
      const totalQuantity = cartBooks.reduce((acc, book) => acc + book.quantity, 0);
      const subTotal = cartBooks.reduce((acc, book) => acc + book.quantity * book.newPrice, 0);
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
      navigate("/payment", { state: { subTotal } });
      
    } catch (error) {
      console.error("Error adding order: ", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return {
    user,
    totalQuantity,
    subTotal,
    handleConfirmOrder,
  };
}

export default useOrderConfirmation;

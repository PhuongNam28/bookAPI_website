import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import OrderDetailsModal from "../../Components/OrderDetailsModal/OrderDetailsModal";
import DeleteBookButton from "../../Components/DeleteBookButton/DeleteBookButton";
import "./myorderspage.scss";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showToast } from "../../Components/ToastAdded/ToastNewAdded";

function MyOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleSeeDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      const orderRef = doc(db, "orders", orderId); 
      await deleteDoc(orderRef); 
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
      showToast({
        title: "ERROR",
        text: "Failed to delete order.",
        icon: "error"
      });
    }
  };
  

  const calculateDeliveryDate = (orderDate) => {
    const orderDateObj = new Date(orderDate.seconds * 1000);
    const deliveryDateObj = new Date(orderDateObj);
    deliveryDateObj.setDate(orderDateObj.getDate() + 2);
    return deliveryDateObj.toLocaleDateString();
  };

  return (
    <div className="orders-container">
      <div className="backToHome">
        <Link to="/" className="home-link">
          <FontAwesomeIcon icon={faHome} /> Back to Home
        </Link>
      </div>

      <h1 className="page-title">My Orders</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="order-list">
          {orders.map((order,index) => (
            <li className="order-item" key={order.id}>
              <div className="order-header">
                <div className="order-number">Order #{index+1}</div>
                <div className="buttonAction">
                  <button className="details-button" onClick={() => handleSeeDetails(order)}>See Details</button>
                  <DeleteBookButton className="delete-button" onConfirm={() => handleDeleteOrder(order.id)} />
                </div>
              </div>
              <div className="order-details">
                <div><strong>Recipient:</strong> {order.shippingInfo.recipientName}</div>
                <div><strong>Order Date:</strong> {new Date(order.orderDate.seconds * 1000).toLocaleDateString()}</div>
                <div><strong>Shipping:</strong> {order.shippingInfo.cityName}, {order.shippingInfo.streetAddress}</div>
                <div><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</div>
                <div><strong>Estimated Delivery:</strong> {calculateDeliveryDate(order.orderDate)}</div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedOrder && (
        <OrderDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          order={selectedOrder}
        />
      )}
    </div>
  );
}

export default MyOrdersPage;

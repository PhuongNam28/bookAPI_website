import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useOrders } from "../../Hooks/useOrders";
import OrderDetailsModal from "../../Components/OrderDetailsModal/OrderDetailsModal";
import DeleteBookButton from "../../Components/DeleteBookButton/DeleteBookButton";
import "./myorders.scss";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showToast } from "../../Components/ToastAdded/ToastNewAdded";
import shipping from "../../assets/Shipping/shipping.png";
import shipping2 from "../../assets/Shipping/shipping2.jpg";
import shipping3 from "../../assets/Shipping/shipping 3.png";
function MyOrders() {
  const { orders, loading, error, setOrders } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setOrders(orders.filter((order) => order.id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
      showToast({
        title: "ERROR",
        text: "Failed to delete order.",
        icon: "error",
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
      ) : error ? (
        <p>Error loading orders: {error.message}</p>
      ) : (
        <>
          <img className="shippingImg" src={shipping} alt="" />
          <img className="shippingImg2" src={shipping2} alt="" />
          <ul className="order-list">
            {orders.map((order, index) => (
              <li className="order-item" key={order.id}>
                <div className="subOrderItem">
                  <div className="order-header">
                    <div className="orderContainer">
                      <div className="order-number">Order #{index + 1}</div>
                      <div className="orderDateMyOrder">
                        Order Date:{" "}
                        {new Date(
                          order.orderDate.seconds * 1000
                        ).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="buttonAction">
                      <button
                        className="details-button"
                        onClick={() => handleSeeDetails(order)}
                      >
                        See Details
                      </button>
                      <DeleteBookButton
                        className="delete-button"
                        onConfirm={() => handleDeleteOrder(order.id)}
                      />
                    </div>
                  </div>
                  <div className="orderDetailTotal">
                      <div className="order-details">
                        <div className="recipientNameMyOrder">
                          <strong>Recipient Name:</strong>{" "}
                          <i>{order.shippingInfo.recipientName}</i>{" "}
                        </div>
                        <div className="shippingMyOrder">
                          <strong>Shipping Address:</strong>{" "}
                          {order.shippingInfo.cityName},{" "}
                          {order.shippingInfo.streetAddress}
                        </div>
                        <div className="estimatedDeliveryMyOrder">
                          <strong style={{ color: "green" }}>
                            Estimated Delivery:
                          </strong>{" "}
                          {calculateDeliveryDate(order.orderDate)}
                        </div>
                        <div className="totalMyOrder">
                          <strong style={{ color: "red" }}>Total Payment:</strong> $
                          {order.totalAmount.toFixed(2)}
                        </div>
                      </div>
                        <img className="shippingImg3" src={shipping3} alt="" />
                  </div>
                 
                </div>
              </li>
            ))}
          </ul>
        </>
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

export default MyOrders;

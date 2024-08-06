import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { showToast } from "../Components/ToastAdded/ToastNewAdded";

export const useMyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => { 
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error);
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

  return {
    orders,
    loading,
    error,
    selectedOrder,
    isModalOpen,
    handleSeeDetails,
      handleCloseModal,
    handleDeleteOrder,
    calculateDeliveryDate,
  };
};

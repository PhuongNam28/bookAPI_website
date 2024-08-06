import React from 'react';
import './orderdetailsmodal.scss';

const OrderDetailsModal = ({ isOpen, onClose, order }) => {
  if (!isOpen) {
    return null;
  }
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Order Details</h2>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="order-details-table">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {order.orderDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.productName}</td>
                  <td>{detail.quantity}</td>
                  <td>${detail.unitPrice.toFixed(2)}</td>
                  <td>
                    <button className="ship-button">NotShip</button>
                    <button className="paid-button">Paid</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;

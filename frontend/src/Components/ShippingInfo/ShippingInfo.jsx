import React from "react";
import "./shippinginfo.css";
import useShipping from "../../Hooks/useShipping";
import shipping from "../../assets/Progress/shipping-progress.png"
function ShippingInfo() {
  const {
    shippingDetails,
    errors,
    savedAddresses,
    totalQuantity,
    subTotal,
    handleInputChange,
    handleSaveAndContinue,
    handleSelectSavedAddress,
  } = useShipping();

  return (
    <div className="shippingInfoContainer">
      <div className="shippingInfoHeader">
        <h1>Check out your cart</h1>
      </div>
      <img src={shipping} className="shippingProgress" alt="" />
      <div className="shippingInfo">
        <div className="shippingInfoLeft">
          <div className="shippingInfoProgress">Shipping Address</div>
          <div className="shippingInfoAddress">
            <div className="shippingInfoOldAddress">
              <h2>Saved Addresses</h2>
              {savedAddresses.length > 0 ? (
                savedAddresses.map((address, index) => (
                  <div key={index} className="savedAddress" onClick={() => handleSelectSavedAddress(address)}>
                    <p>{address.recipientName}, {address.cityName}, {address.streetAddress}</p>
                  </div>
                ))
              ) : (
                <p>No saved addresses found.</p>
              )}
            </div>
            <div className="shippingInfoDetails">
              Receipient Name:{" "}
              <input
                type="text"
                name="recipientName"
                value={shippingDetails.recipientName}
                onChange={handleInputChange}
                className={errors.recipientName ? "error" : ""}
              />
              {errors.recipientName && (
                <span className="errorMessage">{errors.recipientName}</span>
              )}
              Company Name:{" "}
              <input
                type="text"
                name="companyName"
                value={shippingDetails.companyName}
                onChange={handleInputChange}
              />
              Street Address:{" "}
              <textarea
                name="streetAddress"
                value={shippingDetails.streetAddress}
                onChange={handleInputChange}
                cols="5"
                rows="5"
                className={errors.streetAddress ? "error" : ""}
              ></textarea>
              {errors.streetAddress && (
                <span className="errorMessage">{errors.streetAddress}</span>
              )}
              <p style={{ color: "blue" }}>
                Please provide the Address at which you would be available between 9 AM – 6 PM as our Courier partners deliver between this time{" "}
              </p>
              <br />
              Country:{" "}
              <select
                name="country"
                value={shippingDetails.country}
                onChange={handleInputChange}
              >
                <option value="VietNam">VietNam</option>
                <option value="ThaiLan">ThaiLan</option>
                <option value="Lao">Lao</option>
              </select>
              City Name:{" "}
              <input
                type="text"
                name="cityName"
                value={shippingDetails.cityName}
                onChange={handleInputChange}
              />
              Pin/Zip Code:{" "}
              <input
                type="text"
                name="zipCode"
                value={shippingDetails.zipCode}
                onChange={handleInputChange}
              />
              Phone:{" "}
              <input
                type="text"
                name="phone"
                value={shippingDetails.phone}
                onChange={handleInputChange}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <span className="errorMessage">{errors.phone}</span>
              )}
              <button onClick={handleSaveAndContinue}>Save & Continue</button>
            </div>
          </div>
        </div>
        <div className="shippingInfoRight">
          <h1>Orders Summary</h1>
          <hr />
          <h5>Items: {totalQuantity}</h5>
          <h5>Sub Total: ${subTotal.toFixed(2)}</h5>
          <h5>Shipping: Free</h5>
          <h3>Amount Payable: ${subTotal.toFixed(2)}</h3>
          <hr />
          <h6>Shipping within 1-2 days</h6>
        </div>
      </div>
    </div>
  );
}

export default ShippingInfo;

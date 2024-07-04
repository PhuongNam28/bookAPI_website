import React, { useState, useEffect } from "react";
import "./shippinginfo.css";
import { useDispatch, useSelector } from "react-redux";
import { addBookSelector } from "../../Redux/selector";
import { Link, useNavigate } from "react-router-dom";
import { setShippingInfo } from "../../Redux/actions";

function ShippingInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartBooks = useSelector(addBookSelector);

  // State to store shipping details and errors
  const [shippingDetails, setShippingDetails] = useState({
    recipientName: "",
    companyName: "",
    streetAddress: "",
    landmark: "",
    country: "VietNam",
    cityName: "",
    zipCode: "",
    mobile: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    recipientName: false,
    streetAddress: false,
    mobile: false,
    phone: false,
  });

  const [savedAddresses, setSavedAddresses] = useState([]);


  useEffect(() => {
    const saved = localStorage.getItem("savedAddresses");
    if (saved) {
      setSavedAddresses(JSON.parse(saved));
    }
  }, []);


  const saveToLocalStorage = (address) => {
    const updatedAddresses = [...savedAddresses, address];
    setSavedAddresses(updatedAddresses);
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
  };

  const totalQuantity = cartBooks.reduce((acc, book) => acc + book.quantity, 0);
  const subTotal = cartBooks.reduce(
    (acc, book) => acc + book.quantity * book.newPrice,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const handleSaveAndContinue = () => {
    if (validateForm()) {
      saveToLocalStorage(shippingDetails);
      dispatch(setShippingInfo(shippingDetails));
      navigate("/confirm");
    }
  };

  // Validate form input
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      recipientName: false,
      streetAddress: false,
      mobile: false,
      phone: false,
    };
    if (!shippingDetails.recipientName) {
      newErrors.recipientName = true;
      isValid = false;
    }
    if (!shippingDetails.streetAddress) {
      newErrors.streetAddress = true;
      isValid = false;
    }
    if (!shippingDetails.mobile || !/^\d{10}$/.test(shippingDetails.mobile)) {
      newErrors.mobile = true;
      isValid = false;
    }
    if (!shippingDetails.phone || !/^\d{10}$/.test(shippingDetails.phone)) {
      newErrors.phone = true;
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSelectSavedAddress = (address) => {
    setShippingDetails(address);
  };

  return (
    <div className="shippingInfoContainer">
      <div className="shippingInfoHeader">
        <h1>Check out your cart</h1>
      </div>
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
                <span className="errorMessage">Please enter recipient name</span>
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
                <span className="errorMessage">Please enter street address</span>
              )}
              Please provide the Address at which you would be available between 9 AM – 6 PM as our Courier partners deliver between this time{" "}
              <br />
              LandMark:{" "}
              <input
                type="text"
                name="landmark"
                value={shippingDetails.landmark}
                onChange={handleInputChange}
              />
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
              Mobile:{" "}
              <input
                type="text"
                name="mobile"
                value={shippingDetails.mobile}
                onChange={handleInputChange}
                className={errors.mobile ? "error" : ""}
              />
              {errors.mobile && (
                <span className="errorMessage">Please enter mobile number</span>
              )}
              Phone:{" "}
              <input
                type="text"
                name="phone"
                value={shippingDetails.phone}
                onChange={handleInputChange}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <span className="errorMessage">Please enter phone number</span>
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

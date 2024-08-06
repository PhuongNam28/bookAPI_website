import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookSelector } from "../Redux/selector";
import { setShippingInfo } from "../Redux/ShippingRedux/shippingAction";
import * as yup from "yup";

const useShipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartBooks = useSelector(addBookSelector);
  
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

  const [errors, setErrors] = useState({});
  const [savedAddresses, setSavedAddresses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedAddresses");
    if (saved) {
      setSavedAddresses(JSON.parse(saved));
    }
  }, []);

  const saveToLocalStorage = (address) => {
    const addressExists = savedAddresses.some((savedAddress) => savedAddress === address);
    console.log(addressExists)
    if (!addressExists) {
      const updatedAddresses = [...savedAddresses, address];
      setSavedAddresses(updatedAddresses);
      localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
    }
  };

  const totalQuantity = cartBooks.reduce((acc, book) => acc + book.quantity, 0);
  const subTotal = cartBooks.reduce((acc, book) => acc + book.quantity * book.newPrice, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const validationSchema = yup.object().shape({
    recipientName: yup.string().required("Please enter recipient name"),
    streetAddress: yup.string().required("Please enter street address"),
    mobile: yup.string().required("Please enter mobile number"),
    phone: yup.string().matches(/^\d{10}$/, "Please enter a valid 10-digit phone number").required("Please enter phone number"),
  });

  const validateForm = async () => {
    try {
      await validationSchema.validate(shippingDetails, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors = validationErrors.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(newErrors);
      return false;
    }
  };

  const handleSaveAndContinue = async () => {
    if (validateForm) {
      saveToLocalStorage(shippingDetails);
      dispatch(setShippingInfo(shippingDetails));
      navigate("/confirm");
    }
    else{
      console.log("kh on roi")
    }
  };

  const handleSelectSavedAddress = (address) => {
    setShippingDetails(address);
  };

  return {
    shippingDetails,
    errors,
    savedAddresses,
    totalQuantity,
    subTotal,
    handleInputChange,
    handleSaveAndContinue,
    handleSelectSavedAddress,
  };
};

export default useShipping;

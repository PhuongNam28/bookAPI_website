import React, { useState } from 'react';
import './shippinginfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBookSelector } from '../../Redux/selector';
import { Link } from 'react-router-dom';
import { setShippingInfo } from '../../Redux/actions';

function ShippingInfo() {
    const dispatch = useDispatch();
    const cartBooks = useSelector(addBookSelector);

    // State để lưu trữ thông tin vận chuyển
    const [shippingDetails, setShippingDetails] = useState({
        recipientName: '',
        companyName: '',
        streetAddress: '',
        landmark: '',
        country: 'VietNam',
        cityName: '',
        zipCode: '',
        mobile: '',
        phone: ''
    });

    // Tính tổng số lượng và tổng giá tiền
    const totalQuantity = cartBooks.reduce((acc, book) => acc + book.quantity, 0);
    const subTotal = cartBooks.reduce((acc, book) => acc + book.quantity * book.newPrice, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails({
            ...shippingDetails,
            [name]: value
        });
    };

    const handleSaveAndContinue = () => {
        dispatch(setShippingInfo(shippingDetails));
    };

    return (
        <div className='shippingInfoContainer'>
            <div className='shippingInfoHeader'>
                <h1>Check out your cart</h1>
            </div>
            <div className='shippingInfo'>
                <div className="shippingInfoLeft">
                    <div className="shippingInfoProgress">Shipping Address</div>
                    <div className="shippingInfoAddress">
                        <div className="shippingInfoOldAddress">The shipping address will be saved to your account to help <br /> you a faster checkout with your next orders.</div>
                        <div className="shippingInfoDetails">
                            Receipient Name: <input type="text" name="recipientName" value={shippingDetails.recipientName} onChange={handleInputChange} />
                            Company Name: <input type="text" name="companyName" value={shippingDetails.companyName} onChange={handleInputChange} />
                            Street Address: <textarea name="streetAddress" value={shippingDetails.streetAddress} onChange={handleInputChange} cols='5' rows='5' ></textarea>
                            Please provide the Address at which you would be available between 9 AM – 6 PM as our Courier partners deliver between this time <br />
                            LandMark: <input type="text" name="landmark" value={shippingDetails.landmark} onChange={handleInputChange} />
                            Country: <select name="country" value={shippingDetails.country} onChange={handleInputChange}>
                                <option value="VietNam">VietNam</option>
                                <option value="ThaiLan">ThaiLan</option>
                                <option value="Lao">Lao</option>
                            </select>
                            City Name: <input type="text" name="cityName" value={shippingDetails.cityName} onChange={handleInputChange} />
                            Pin/Zip Code: <input type="text" name="zipCode" value={shippingDetails.zipCode} onChange={handleInputChange} />
                            Mobile: <input type="text" name="mobile" value={shippingDetails.mobile} onChange={handleInputChange} />
                            Phone: <input type="text" name="phone" value={shippingDetails.phone} onChange={handleInputChange} />
                            <Link to='/confirm'><button onClick={handleSaveAndContinue}>Save & Continue</button></Link>
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

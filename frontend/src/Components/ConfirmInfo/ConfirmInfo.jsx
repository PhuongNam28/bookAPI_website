import React, { useEffect, useState } from 'react';
import './confirminfo.scss';
import { useSelector } from 'react-redux';
import { addBookSelector,addConfirmSelector } from '../../Redux/selector';
import firebase, {auth} from '../../lib/firebase'
function ConfirmInfo() {
    const cartBooks = useSelector(addBookSelector);
    const shippingInfo = useSelector(addConfirmSelector);
    // const [phoneNumber,setPhoneNumber] = useState('')
    // const [otp,setOtp] = useState('')
    // Tính tổng số lượng và tổng giá tiền
    const totalQuantity = cartBooks.reduce((acc, book) => acc + book.quantity, 0);
    const subTotal = cartBooks.reduce((acc, book) => acc + book.quantity * book.newPrice, 0);

    // const handleSendOTP = async ()=>{
    //     const appVerify = window.recaptchaVerifier;
    //     await firebase.auth().signInWithPhoneNumber(phoneNumber,appVerify)
    //     .then((confirmationResult)=>{
    //         window.confirmationResult = confirmationResult;
    //         alert('OTP sended')
    //     })
    //     .catch((error)=>{
    //         alert('Cant send OTP')
    //     })
    // }
    // const handleVerifyOTP = ()=>{
    //     window.confirmationResult.confirm(otp)
    //     .then(()=>{
    //         alert('OTP verified')
    //     })
    //     .catch(()=>{
    //         alert('Cant verify OTP')
    //     }
    // )

    // }
    // const setupCaptcha = ()=>{
    //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha-button',{
    //         size: 'invisible',
    //         defaultCountry: 'VN'
    //     }) 
    // }
    // useEffect(()=>{
    //     setupCaptcha()
    // },[])
    return (
        <div className='confirmInfoContainer'>
            <div className='confirmInfoHeader'>
                <h1>Check out your cart</h1>
            </div>

            <div className='confirmInfo'>
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
                    <div className="authInfo">
                        <div className="authInfoLeft">
                            <div className="giftMessage">
                                <div className="gift"></div>
                                <div className="special"></div>
                            </div>
                            <div className="OTP">
                                Enter your phone number:
                                <h6>We will send you an OTP on you Mobile Number for verification</h6>
                                <input type="text"  />
                                <button id='captcha'>Get OTP</button>

                                <input type="text"/>
                                <button id='captcha'>Verify OTP</button>
                            </div>
                            <div className="captcha">CaptCha</div>
                            <div className="coupon">Coupon</div>
                        </div>
                        <div className="authInfoRight"></div>
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
                    <div className="billingSummary">
                        <h4>Billing Information</h4>
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
                </div>
            </div>
        </div>
    );
}

export default ConfirmInfo;

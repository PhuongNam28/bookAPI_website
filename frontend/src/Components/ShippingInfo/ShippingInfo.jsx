import React from 'react';
import './shippinginfo.css';
import { useSelector } from 'react-redux';
import { addBookSelector } from '../../Redux/selector';
import { Link } from 'react-router-dom';

function ShippingInfo() {
    const cartBooks = useSelector(addBookSelector);

    // Tính tổng số lượng và tổng giá tiền
    const totalQuantity = cartBooks.reduce((acc, book) => acc + book.quantity, 0);
    const subTotal = cartBooks.reduce((acc, book) => acc + book.quantity * book.newPrice, 0);

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
                            Receipient Name: <input type="text" required />
                            Company Name: <input type="text" />
                            Street Address: <textarea name="" id="" cols='5' rows='5' ></textarea>Please provide the Address at which you would be available between 9 AM – 6 PM as our Courier partners deliver between this time <br />
                            LandMark: <input type="text" />
                            Country: <select name="" id="">
                                <option value="">VietNam</option>
                                <option value="">ThaiLan</option>
                                <option value="">Lao</option>
                            </select>
                            City Name: <input type="text" />
                            Pin/Zip Code: <input type="text" />
                            Mobile: <input type="text" />
                            Phone: <input type="text" />
                            <button><Link to='/confirm'>Save & Continue</Link></button>
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
    )
}

export default ShippingInfo;

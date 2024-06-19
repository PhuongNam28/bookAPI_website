import React from 'react'
import './confirminfo.css'
function ConfirmInfo() {
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
                            <tr>
                                    <th>STT</th>
                                    <th>Item Description</th>
                                    <th>Quantity</th>
                                    <th>Item Price</th>
                                    <th>Total Price</th>
                            </tr>
                            <tr>
                                    <td>1</td>
                                    <td>Book</td>
                                    <td>2</td>
                                    <td>23</td>
                                    <td>23</td>
                            </tr>
                            </table>
                    </div>
                    <div className="authInfo">
                       <div className="authInfoLeft">
                            <div className="giftMessage">
                                <div className="gift"></div>
                                <div className="special"></div>
                            </div>
                            <div className="OTP">
                                <h6>We will send you an OTP on you Mobile Number for verification</h6>
                                Enter your phone number:
                                <input type="text" /> 
                                <button>Get OTP</button>
                            </div>
                            <div className="captcha">CaptCha</div>
                            <div className="coupon">Coupon</div>
                       </div> 
                       <div className="authInfoRight"></div> 
                    </div>
                </div>
                <div className="confirmInfoRight">
                    <div className="orderSummary">order</div>
                    <div className="shippingSummary">shipping</div>
                    <div className="billingSummary">billing</div>
                </div>
            </div>
    </div>
  )
}

export default ConfirmInfo;
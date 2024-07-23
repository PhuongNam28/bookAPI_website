import React from 'react'
import "./historytable.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCar,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
function HistoryTable() {
  return (
    <div className='HistoryTable'>
      <h4 className='headerBack'>Go Back To</h4>
        <a href="added"><FontAwesomeIcon className='goBackButton' icon={faShoppingCart} /> My Cart </a>
        <a href="shippinginfo"><FontAwesomeIcon className='goBackButton' icon={faCar} /> Shipping Info</a>
        <a href="confirm"><FontAwesomeIcon className='goBackButton' icon={faCheck} />Confirmation</a>
    </div>
  )
}

export default HistoryTable
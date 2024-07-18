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
        <a href="added"><FontAwesomeIcon icon={faShoppingCart} style={{"padding-right":"5px"}}/> My Cart </a>
        <a href="shippinginfo"><FontAwesomeIcon icon={faCar} style={{"padding-right":"5px"}} /> Shipping Info</a>
        <a href="confirm"><FontAwesomeIcon icon={faCheck} style={{"padding-right":"5px"}} />Confirmation</a>
    </div>
  )
}

export default HistoryTable
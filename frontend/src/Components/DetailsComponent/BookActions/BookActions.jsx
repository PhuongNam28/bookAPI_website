import React from 'react';
import './bookactions.scss'
function BookActions() {

    return (
        <div className="book-details-actions">
            <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <select id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="add-to-cart" >Add to Cart</button>
            <button className="buy-now">Buy Now</button>
            <button className="add-to-wishlist">Add to Wishlist</button>
        </div>
    );
}

export default BookActions;

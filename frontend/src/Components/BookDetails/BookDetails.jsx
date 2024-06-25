import React from 'react';
import { useLocation } from 'react-router-dom';
import './bookdetails.css';

function BookDetails() {
    const location = useLocation();
    const { book } = location.state;
    const calculateDiscount = (oldPrice, newPrice) => {
        const discount = ((oldPrice - newPrice) / oldPrice) * 100;
        return Math.round(discount);
    }
    if (!book) {
        return <div className="not-found">Book not found</div>;
    }

    return (
        <div className="book-details">
            <div className="breadcrumb">Home &gt; Fiction &gt; Classic fiction &gt; {book.title}</div>
            <div className="book-details-main">
                <div className="book-details-img-container">
                    <img className="book-details-img" src={book.img} alt={book.title} />
                    <div className="book-details-discount">{calculateDiscount(book.oldPrice,book.newPrice)}%</div>
                </div>
                <div className="book-details-info">
                    <h1 className="book-details-title">{book.title}</h1>
                    <div className="book-details-authors">
                        By: {book.author}
                    </div>
                    <div className="book-details-rating">
                        <span>5</span>
                        <span>⭐⭐⭐⭐⭐</span>
                        <span>| 6 Reviews</span>
                    </div>
                    <div className="book-details-pricing">
                        <span className="book-details-newPrice">₹{book.newPrice}</span>
                        <span className="book-details-oldPrice">M.R.P: ₹{book.oldPrice}</span>
                        <span className="book-details-save">Save: ₹{(book.oldPrice - book.newPrice).toFixed(2)} {calculateDiscount(book.oldPrice,book.newPrice)}%</span>
                    </div>
                    <div className="book-details-availability">
                        <span>Available</span>
                        <span>Ships within 2-4 Business Days</span>
                    </div>
                    <p className="book-details-description">{book.description}</p>
                    <div className="book-details-isbn">
                        <span>ISBN-10: 0241252083 | </span>
                        <span>ISBN-13: 9780241252086 | </span>
                        <span>Page Number: 128 | </span>
                        <span>Language: English | </span>
                        <span>Weight: 100 gr</span>
                    </div>
                </div>
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
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="buy-now">Buy Now</button>
                    <button className="add-to-wishlist">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;

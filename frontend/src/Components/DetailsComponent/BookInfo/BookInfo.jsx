import React from 'react';

function BookInfo({ book }) {
    const calculateDiscount = (oldPrice, newPrice) => {
        const discount = ((oldPrice - newPrice) / oldPrice) * 100;
        return Math.round(discount);
    };
    return (
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
                <span className="book-details-save">Save: ₹{(book.oldPrice - book.newPrice).toFixed(2)} {calculateDiscount(book.oldPrice, book.newPrice)}%</span>
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
    );
}

export default BookInfo;
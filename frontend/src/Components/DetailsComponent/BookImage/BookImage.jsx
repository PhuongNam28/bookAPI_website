import React from 'react';

function BookImage({ img, title, oldPrice, newPrice }) {
    const calculateDiscount = (oldPrice, newPrice) => {
        const discount = ((oldPrice - newPrice) / oldPrice) * 100;
        return Math.round(discount);
    };

    return (
        <div className="book-details-img-container">
            <img className="book-details-img" src={img} alt={title} />
            <div className="book-details-discount">{calculateDiscount(oldPrice, newPrice)}%</div>
        </div>
    );
}

export default BookImage;

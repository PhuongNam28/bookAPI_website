import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../DetailsComponent/BreadScrump/BreadScrump';
import BookImage from '../DetailsComponent/BookImage/BookImage';
import BookInfo from '../DetailsComponent/BookInfo/BookInfo';
import BookActions from '../DetailsComponent/BookActions/BookActions';

function BookDetails() {
    const location = useLocation();
    const { book } = location.state;
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'BestSeller', path: '/category/bestseller' },
        { label: 'Manga',  path: `/category/${book.category}` },
        { label: book.title }
    ];

    if (!book) {
        return <div className="not-found">Book not found</div>;
    }

    return (
        <div className="book-details">
             <Breadcrumb items={breadcrumbItems} />
            <div className="book-details-main">
                <BookImage img={book.img} title={book.title} oldPrice={book.oldPrice} newPrice={book.newPrice} />
                <BookInfo book={book} />
                <BookActions />
            </div>
        </div>
    );
}

export default BookDetails;

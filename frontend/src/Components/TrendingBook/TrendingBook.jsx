import React, { useState } from 'react';
import './trendingbook.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from '../Modal/index';
import Slider from "react-slick";
import trendingBooks from "../../Data/data.js"


function TrendingBook() {
    const [show, setShow] = useState(false);
    const [item, setItem] = useState();
    
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const calculateDiscount = (oldPrice, newPrice) => {
        const discount = ((oldPrice - newPrice) / oldPrice) * 100;
        return Math.round(discount);
    }
    return (
        <div className='allBookContainer'>
            <div className='trendingBookContainer'>
                <h1>Trending Manga</h1>
                <Slider {...settings}>
                    {trendingBooks.map((book) => {
                        const discount = calculateDiscount(book.oldPrice, book.newPrice);
                        return (
                            <div key={book.id} className='trendingBook'>
                                <img className='trendingbookPic' src={book.img} alt={book.title} />
                                <div className="sale-off">{discount}%</div>
                                <button className='seeDetails' onClick={()=>{setShow(true);setItem(book)}}>See details</button>
                                <p className='bookTitle'>{book.title}</p>
                                <p className='bookAuthor'>{book.author}</p>
                                <div className='price'>
                                    <p className='oldPrice'>${book.oldPrice.toFixed(2)}</p>
                                    <p className='newPrice'>${book.newPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <a className='seeAll' href="#">SEE ALL</a>
            <hr className='hrIcon' />
            <Modal show={show} item={item} onClose={() => setShow(false)} />
        </div>
    );
}

export default TrendingBook;

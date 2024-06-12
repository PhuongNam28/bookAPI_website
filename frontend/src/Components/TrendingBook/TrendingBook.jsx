import React from 'react';
import './trendingbook.css';
import AOT from '../../assets/trendingbook/AOT.jpg';
import beserk from '../../assets/trendingbook/bersek.jpg';
import Blue from '../../assets/trendingbook/BlueLock.jpg';
import chain from '../../assets/trendingbook/chainsawman.jpg';
import drb from '../../assets/trendingbook/drb.jpg';
import jujustu from '../../assets/trendingbook/jujustu.jpg';
import jujustu2 from '../../assets/trendingbook/jujustu2.jpg';
import Komi from '../../assets/trendingbook/Komi.jpg';
import mhac from '../../assets/trendingbook/mhac.jpg';
import OP from '../../assets/trendingbook/OP.jpg';
import OPM from '../../assets/trendingbook/opm.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingBook() {
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

    const trendingBooks = [
        {
            title: 'Attack on Titan (Shingeki no Kyojin)',
            author: 'Hajime Isayama',
            img: AOT,
            oldPrice: 15.99,
            newPrice: 12.99
        },
        {
            title: 'Berserk',
            author: 'Kentaro Miura',
            img: beserk,
            oldPrice: 18.99,
            newPrice: 14.99
        },
        {
            title: 'Blue Lock',
            author: 'Muneyuki Kaneshiro (viết truyện), Yusuke Nomura (vẽ minh họa)',
            img: Blue,
            oldPrice: 13.99,
            newPrice: 10.99
        },
        {
            title: 'Chainsaw Man',
            author: 'Tatsuki Fujimoto',
            img: chain,
            oldPrice: 14.99,
            newPrice: 11.99
        },
        {
            title: 'Dragon Ball',
            author: 'Akira Toriyama',
            img: drb,
            oldPrice: 19.99,
            newPrice: 16.99
        },
        {
            title: 'Jujutsu Kaisen',
            author: 'Gege Akutami',
            img: jujustu,
            oldPrice: 16.99,
            newPrice: 13.99
        },
        {
            title: 'Jujutsu Kaisen 2',
            author: 'Gege Akutami',
            img: jujustu2,
            oldPrice: 16.99,
            newPrice: 13.99
        },
        {
            title: 'Komi Cant Communicate (Komi-san wa, Comyushou desu)',
            author: 'Tomohito Oda',
            img: Komi,
            oldPrice: 12.99,
            newPrice: 9.99
        },
        {
            title: 'My Hero Academia (Boku no Hero Academia)',
            author: 'Kohei Horikoshi',
            img: mhac,
            oldPrice: 14.99,
            newPrice: 11.99
        },
        {
            title: 'One Piece',
            author: 'Eiichiro Oda',
            img: OP,
            oldPrice: 19.99,
            newPrice: 16.99
        },
        {
            title: 'One Punch Man',
            author: 'ONE (viết truyện), Yusuke Murata (vẽ minh họa)',
            img: OPM,
            oldPrice: 15.99,
            newPrice: 12.99
        }
    ];

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
                            <div key={book.title} className='trendingBook'>
                                <img className='trendingbookPic' src={book.img} alt={book.title} />
                                <div className="sale-off">{discount}%</div>
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
        </div>
    );
}

export default TrendingBook;

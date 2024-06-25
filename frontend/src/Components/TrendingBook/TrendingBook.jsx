import React, { useState } from 'react';
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
import Modal from '../Modal/Modal';
import { v4 as uuidv4 } from 'uuid';

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

    const trendingBooks = [
        {
            id: uuidv4(),
            title: 'Attack on Titan (Shingeki no Kyojin)',
            author: 'Hajime Isayama',
            img: AOT,
            oldPrice: 15.99,
            newPrice: 12.99,
            description: 'In a post-apocalyptic world, humanity fights for survival against giant humanoid Titans that devour humans.'
        },
        {
            id: uuidv4(),
            title: 'Berserk',
            author: 'Kentaro Miura',
            img: beserk,
            oldPrice: 18.99,
            newPrice: 14.99,
            description: 'Follow the dark and brutal journey of Guts, a lone mercenary, as he battles demonic forces and seeks vengeance.'
        },
        {
            id: uuidv4(),
            title: 'Blue Lock',
            author: 'Muneyuki Kaneshiro',
            img: Blue,
            oldPrice: 13.99,
            newPrice: 10.99,
            description: 'In an intense football training program, players compete to become the best striker in Japan.'
        },
        {
            id: uuidv4(),
            title: 'Chainsaw Man',
            author: 'Tatsuki Fujimoto',
            img: chain,
            oldPrice: 14.99,
            newPrice: 11.99,
            description: 'A young man merges with his pet devil to become Chainsaw Man, fighting against devils and monsters.'
        },
        {
            id: uuidv4(),
            title: 'Dragon Ball',
            author: 'Akira Toriyama',
            img: drb,
            oldPrice: 19.99,
            newPrice: 16.99,
            description: 'Join Goku and his friends on their adventures as they defend Earth from powerful foes and seek the Dragon Balls.'
        },
        {
            id: uuidv4(),
            title: 'Jujutsu Kaisen',
            author: 'Gege Akutami',
            img: jujustu,
            oldPrice: 16.99,
            newPrice: 13.99,
            description: 'A high school student joins a secret organization of sorcerers to fight against malevolent curses and save humanity.'
        },
        {
            id: uuidv4(),
            title: 'Jujutsu Kaisen 2',
            author: 'Gege Akutami',
            img: jujustu2,
            oldPrice: 16.99,
            newPrice: 13.99,
            description: 'The thrilling continuation of Jujutsu Kaisen, with more intense battles and deeper character development.'
        },
        {
            id: uuidv4(),
            title: 'Komi Cant Communicate (Komi-san wa, Comyushou desu)',
            author: 'Tomohito Oda',
            img: Komi,
            oldPrice: 12.99,
            newPrice: 9.99,
            description: 'Komi struggles with extreme social anxiety but is determined to make 100 friends in high school.'
        },
        {
            id: uuidv4(),
            title: 'My Hero Academia (Boku no Hero Academia)',
            author: 'Kohei Horikoshi',
            img: mhac,
            oldPrice: 14.99,
            newPrice: 11.99,
            description: 'In a world where nearly everyone has superpowers, a boy without them dreams of becoming the greatest hero.'
        },
        {
            id: uuidv4(),
            title: 'One Piece',
            author: 'Eiichiro Oda',
            img: OP,
            oldPrice: 19.99,
            newPrice: 16.99,
            description: 'Join Monkey D. Luffy and his pirate crew as they search for the ultimate treasure, the One Piece.'
        },
        {
            id: uuidv4(),
            title: 'One Punch Man',
            author: 'Yusuke Murata (vẽ minh họa)',
            img: OPM,
            oldPrice: 15.99,
            newPrice: 12.99,
            description: 'Saitama, a hero who can defeat any opponent with a single punch, struggles to find a worthy adversary.'
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

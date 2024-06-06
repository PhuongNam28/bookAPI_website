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
            style={{ ...style, display: "block", background: "black",borderRadius: "50%"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%",}}
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
        {   title:'Attack on Titan (Shingeki no Kyojin)',
            author: 'Hajime Isayama',
            img: AOT
        },
        {   title:'Berserk',
            author: 'Kentaro Miura',
            img: beserk
        },
        {   title:'Blue Lock',
            author: 'Muneyuki Kaneshiro (viết truyện), Yusuke Nomura (vẽ minh họa)',
            img: Blue
        },
        {   title:'Chainsaw Man',
            author: 'Tatsuki Fujimoto',
            img: chain
        },
        {   title:'Dragon Ball',
            author: ' Akira Toriyama',
            img: drb
        },
        {   title:' Jujutsu Kaisen',
            author: 'Gege Akutami',
            img: jujustu
        },
        {   title:' Jujutsu Kaisen 2',
          author: 'Gege Akutami',
          img: jujustu2
        },
        {   title:'Komi Cant Communicate (Komi-san wa, Comyushou desu)',
            author: 'Tomohito Oda',
            img: Komi
        },
        {   title:' My Hero Academia (Boku no Hero Academia)',
            author: 'Kohei Horikoshi',
            img: mhac
        },
        {   title:'One Piece',
            author: 'Hajime Isayama',
            img: OP
        },
        {   title:' One Punch Man',
            author: 'ONE (viết truyện), Yusuke Murata (vẽ minh họa)',
            img: OPM
        },
        
    ]
  return (
    <div className='allBookContainer'>
        <div className='trendingBookContainer'>
            <h1>Treding Manga</h1>
            <Slider {...settings}>
                {trendingBooks.map((book)=>{
                    return <div key={book.title} className='trendingBook'>
                        <img className='trendingbookPic' src={book.img} alt="No pic" width={'500px'} height={'500px'}/>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                })}     
            </Slider> 
        </div>
        <a className='seeAll' href="#">SEE ALL</a>
    </div>
        
        

  )
}

export default TrendingBook
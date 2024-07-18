import React from 'react';
import bestseller from '../../assets/Icons/bestseller.jpg';
import winner from '../../assets/Icons/winner.jpg';
import inter from '../../assets/Icons/inter.jpg';
import boxset from '../../assets/Icons/box set.jpg';
import newarrival from '../../assets/Icons/new arrival.jpg';
import fiction from '../../assets/Icons/fiction book.jpg'
import tarot from '../../assets/Icons/tarot.jpg'
import today from '../../assets/Icons/deal.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Icon() {
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
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    const icons = [
        {   name:'Best Seller',
            img: bestseller
        },
        {   name:'Award Winner',
            img: winner
        },
        {   name:'Box Sets',
            img: boxset
        },
        {   name:'International BestSeller',
            img: inter
        },
        {   name:'New Arrivals',
            img: newarrival
        },
        {   name:'Fiction Books',
            img: fiction
        },
        {   name:'Tarot`s Card',
            img: tarot
        },
        {   name:'Today`s Deals',
            img: today
        },
    ]
  return (
    <div className='allIcon'>
        <div className='iconContainer'>
            <Slider className='iconSlider' {...settings}>
                {icons.map((icon)=>{
                    return <div key={icon.name} className='icon'>
                        <img className='iconpic' src={icon.img} alt="No pic" width={'70px'} height={'70px'}/>
                        <p>{icon.name}</p>
                    </div>
                })}     
            </Slider> 
        </div>
        <hr className='hrIcon' />
    </div>
        
        

  )
}

export default Icon
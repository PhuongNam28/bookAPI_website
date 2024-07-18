import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cb1 from '../../assets/ComboBook/Combo1.jpg';
import cb2 from '../../assets/ComboBook/Combo2.jpg';
import cb3 from '../../assets/ComboBook/Combo3.jpg';

function ComboBook() {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    const comboBooks = [
        {   
            img: cb1,
            title:'Best Tarot Card Decks',
        },
        {   
            img: cb2,
            title:'Exam Central',
        },
        {   
            img: cb3,
            title:'Big Discount On Selected Product',
        },
        
    ]
  return (
    <div className='allComboContainer'>
        <div className='trendingComboContainer'>
            <h1>COMBO BOOK</h1>
            <Slider {...settings}>
                {comboBooks.map((combo)=>{
                    return <div key={combo.title} className='trendingCombo'>
                        <img className='trendingComboPic' src={combo.img} alt="No pic" width={'800px'} height={'600px'}/>
                        <p>{combo.title}</p>
                    </div>
                })}     
            </Slider> 
        </div>
        <hr className='hrIcon' style={{marginTop: "40px"}}/>
    </div>
  )    
}

export default ComboBook
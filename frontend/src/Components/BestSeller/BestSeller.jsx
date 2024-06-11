import React, { useState } from 'react'
import Slider from "react-slick";
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bestseller.css'
function BestSeller() {
  const [bookData,setBookData] = useState([])
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

    const bookAPI = axios('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyB-8BSyFF69__nMYv3AUDz1hQM3sJ4iRMA')
    .then(res=>setBookData(res.data.items))
    .catch(err=>console.log(err))

  return (
    <div className='allBestSellerContainer'>
        <div className='bestSellerContainer'>
            <h1>Best Seller</h1>
            <Slider {...settings}>
                {
                  bookData.map((item)=>{
                    return (
                      <div key={item.id} className='bestSeller'>
                          <img className='bestSellerPic' src={item.volumeInfo.imageLinks.thumbnail} alt="No pic" />
                          <p>{item.volumeInfo.title}</p>
                          <p>{item.volumeInfo.authors}</p>
                      </div>
                    )
                  })
                }
            </Slider> 
        </div>
        <a className='seeAll' href="#">SEE ALL</a>
    </div>
  )
}

export default BestSeller
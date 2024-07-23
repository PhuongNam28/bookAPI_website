import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../BestSeller/bestseller.scss";
import settings from "../../Hooks/slideSetting";
import useAPI from "../../Hooks/useAPI";
import Modal from "../Modal";

function BestSeller() {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState();
  const handleSeeDetails = (item) => {
    setShow(true);
    setItem(item);
  };
  const { data: bookData, loading, error } = useAPI("international");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="allBestSellerContainer">
      <div className="bestSellerContainer">
        <h1>New Arrival</h1>
        <Slider {...settings}>
          {bookData?.items.map((item) => (
            <div key={item.id} className="bestSeller">
              <img className="bestSellerPic" src={item.volumeInfo.imageLinks?.thumbnail} alt="No pic" />
              <p className="title">{item.volumeInfo.title}</p>
              <p className="author">{item.volumeInfo.authors?.join(', ')}</p>
              <button className='seeDetails' onClick={() => handleSeeDetails(item)}>See details</button>
            </div>
          ))}
        </Slider>
      </div>
      <a className="seeAll" href="#">
        SEE ALL
      </a>
      <Modal show={show} item={item} onClose={() => setShow(false)} />
      <hr className="hrIcon" />
    </div>
  );
}

export default BestSeller;

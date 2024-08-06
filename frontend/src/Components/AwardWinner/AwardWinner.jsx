import React, { useState } from "react";
import Slider from "react-slick";
import "../BestSeller/bestseller.scss";
import settings from "../../Hooks/slideSetting";
import useAPI from "../../Hooks/useAPI";
import Modal from "../Modal";

function AwardWinner() {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState();
  const { data: bookData, loading, error } = useAPI("novel");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSeeDetails = (item) => {
    setShow(true);
    setItem(item);
  };

  return (
    <div className="allBestSellerContainer">
      <div className="bestSellerContainer">
        <h1>Award Winner</h1>
        <Slider {...settings}>
          {bookData?.items.map((item) => (
            <div key={item.id} className="bestSeller">
              <img
                className="bestSellerPic"
                src={item.volumeInfo.imageLinks?.thumbnail}
                alt="No pic"
              />
              <p className="title">{item.volumeInfo.title}</p>
              <p className="author">{item.volumeInfo.authors?.join(", ")}</p>
              <button
                className="seeDetails"
                onClick={() => handleSeeDetails(item)}
              >
                See details
              </button>
            </div>
          ))}
        </Slider>
      </div>
      <a className="seeAll" href="#">
        SEE ALL
      </a>
      <Modal show={show} item={item} onClose={() => setShow(false)} />
    </div>
  );
}

export default AwardWinner;

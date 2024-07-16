import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../BestSeller/bestseller.scss";
import settings from "../../Hooks/slideSetting";
import useAPI from "../../Hooks/useAPI";
function BestSeller() {

  const { data: bookData, loading, error } = useAPI("international");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="allBestSellerContainer">
      <div className="bestSellerContainer">
        <h1>New Arrival</h1>
        <Slider {...settings}>
          {bookData?.items.map((item) => {
            return (
              <div key={item.id} className="bestSeller">
                <img
                  className="bestSellerPic"
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt="No pic"
                />
                <p className="title">{item.volumeInfo.title}</p>
                <p className="author">{item.volumeInfo.authors}</p>
              </div>
            );
          })}
        </Slider>
      </div>
      <a className="seeAll" href="#">
        SEE ALL
      </a>
      <hr className="hrIcon" />
    </div>
  );
}

export default BestSeller;

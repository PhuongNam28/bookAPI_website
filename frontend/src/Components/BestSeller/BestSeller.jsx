import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./bestseller.scss";
import settings from "../../Hooks/slideSetting";
import instance from "../../api/api";
function BestSeller() {
  const [bookData, setBookData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance({
          url: "bestsellers",
          params: {
            key: "AIzaSyDmoBeD1zSdaHgR9nh7HUS142-0L6iNL80" 
          },
          method: "GET",
        });
        setBookData(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="allBestSellerContainer">
      <div className="bestSellerContainer">
        <h1>Best Seller</h1>
        <Slider {...settings}>
          {bookData.map((item) => {
            return (
              <div key={item.id} className="bestSeller">
                {/* <img className='bestSellerPic' src={item.imageLinks.thumbnail} alt="No pic" /> */}
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

// BestSeller.jsx
import React from 'react';
import Slider from 'react-slick';
import './bestseller.scss';
import useAPI from '../../Hooks/useAPI'; 
import settings from '../../Hooks/slideSetting'; 

function BestSeller() {

  const { data: bookData, loading, error } = useAPI('bestseller');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="allBestSellerContainer">
      <div className="bestSellerContainer">
        <h1>Best Seller</h1>
        <Slider {...settings}>
          {bookData?.items.map((item) => (
            <div key={item.id} className="bestSeller">
              <img className="bestSellerPic" src={item.volumeInfo.imageLinks?.thumbnail} alt="No pic" />
              <p className="title">{item.volumeInfo.title}</p>
              <p className="author">{item.volumeInfo.authors?.join(', ')}</p>
            </div>
          ))}
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

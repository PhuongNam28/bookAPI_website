import React from 'react'
import Slider from "react-slick";
import settings from "../../Hooks/slideSetting";
import '../BestSeller/bestseller.scss'
import useAPI from '../../Hooks/useAPI';

function InternationalBestSeller() {
  const { data: bookData, loading, error } = useAPI("international");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='allBestSellerContainer'>
        <div className='bestSellerContainer'>
            <h1>International BestSeller</h1>
            <Slider {...settings}>
                {
                  bookData?.items.map((item)=>{
                    return (
                      <div key={item.id} className='bestSeller'>
                          <img className='bestSellerPic' src={item.volumeInfo.imageLinks.thumbnail} alt="No pic" />
                          <p className='title'>{item.volumeInfo.title}</p>
                          <p className='author'>{item.volumeInfo.authors}</p>
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

export default InternationalBestSeller
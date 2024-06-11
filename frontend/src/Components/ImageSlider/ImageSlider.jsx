import React, { useState } from 'react';
import {ArrowBigLeft,ArrowBigRight} from "lucide-react"
import './imageslider.css'
function ImageSlider({ imageUrls }) {
    const [imageIndex, setImageIndex] = useState(1)
    const showPreImg = () => {
      setImageIndex(index =>{
        if(index === 0){
          return imageUrls.length - 1
        }
        return index - 1
      })
    }
    const showNextImg = () => {
      setImageIndex(index =>{
        if(index === imageUrls.length -1){
          return 0
        }
        return index + 1
      })
    }
  return (
    <div className='imageSliderContainer'>
        <img src={imageUrls[imageIndex]} alt={`Slide ${imageIndex}`} />
        <button onClick={showPreImg} className='image-slider-btn' style={{left:0}}><ArrowBigLeft/></button>
        <button onClick={showNextImg} className='image-slider-btn' style={{right:0}}><ArrowBigRight/></button>
    </div>
  );
}

export default ImageSlider;

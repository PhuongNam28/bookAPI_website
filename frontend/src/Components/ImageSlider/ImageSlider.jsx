import React, { useState, useEffect } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

function ImageSlider({ imageUrls }) {
    const [imageIndex, setImageIndex] = useState(0);

    const showPreImg = () => {
        setImageIndex((index) => {
            if (index === 0) {
                return imageUrls.length - 1;
            }
            return index - 1;
        });
    };

    const showNextImg = () => {
        setImageIndex((index) => {
            if (index === imageUrls.length - 1) {
                return 0;
            }
            return index + 1;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((index) => {
                if (index === imageUrls.length - 1) {
                    return 0;
                }
                return index + 1;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [imageUrls.length]);

    return (
        <div className='imageSliderContainer'>
            <img src={imageUrls[imageIndex]} alt={`Slide ${imageIndex}`} />
            <button onClick={showPreImg} className='image-slider-btn' style={{ left: 0 }}>
                <ArrowBigLeft />
            </button>
            <button onClick={showNextImg} className='image-slider-btn' style={{ right: 0 }}>
                <ArrowBigRight />
            </button>
        </div>
    );
}

export default ImageSlider;

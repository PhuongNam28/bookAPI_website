import React, { useState, useEffect } from 'react';
import "./textslider.scss"
const TextSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [
        'Welcome to our website!',
        'Discover our latest books and products!',
        'Contact us at our email address for more information.',
        'Explore our special offers and discounts!',
        'Join our community for exclusive updates!',
        'Browse our curated collection of bestsellers!',
        'Learn about our mission and values.',
        'Shop with us for a unique shopping experience!',
        'Stay tuned for upcoming events and promotions.',
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 20000); 

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="text-slider">
            <p>{texts[currentIndex]}</p>
        </div>
    );
};

export default TextSlider;

import React, { useState } from 'react';
import './modal.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../Redux/actions';
import { v4 as uuidv4 } from 'uuid';

function Modal({ show, item, onClose }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    if (!show) {
        return null;
    }

    const handleAddButtonClick = () => {
        dispatch(addBook({
            id: uuidv4(),
            img: item.img,
            bookName: item.title,
            author: item.author,
            quantity: quantity,
            price: item.newPrice
        }));
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='overlay'>
            <div className="overlay-inner">
                <button className='overlay-close' onClick={onClose}>&times;</button>
                <div className="inner-box">
                    <div className="inner-left">
                        <img className='left-pic' src={item.img} alt="" />
                        <div className="quantity">
                            <button className='decrease' onClick={decreaseQuantity}>-</button>
                            <div className='quantityNumber'>{quantity}</div>
                            <button className='increase' onClick={increaseQuantity}>+</button>
                        </div>
                        <button className='addToCart' onClick={handleAddButtonClick}>Add To Cart</button>
                    </div>

                    <div className="inner-right">
                        <div className="inner-price">
                            <div className='newPrice'>${item.oldPrice.toFixed(2)}</div>
                            <div className='oldPrice'>${item.newPrice.toFixed(2)}</div>
                        </div>
                        <div className="inner-info">
                            <h1 className='modalbookTitle'>{item.title}</h1>
                            <h3 className='modalbookAuthor'>{item.author}</h3>
                            <h4 className='modalbookDesc'>{item.description}</h4>
                        </div>

                        <button className='viewDetails'>View Product Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

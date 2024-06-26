import React, { useState } from 'react';
import './modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateQuantity } from '../../Redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { addBookSelector } from '../../Redux/selector';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../ToastAdded/ToastNewAdded';
import { showAlreadyToast } from '../ToastAdded/ToastAlreadyAdded';

function Modal({ show, item, onClose }) {
    const dispatch = useDispatch();
    const cartBooks = useSelector(addBookSelector);
    const [quantity, setQuantity] = useState(1);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate('/details', { state: { book: item } });
    }
    const handleAddButtonClick = () => {
        const existingBook = cartBooks.find(cartBook => cartBook.bookName === item.title);
        if (existingBook) {
            const updatedQuantity = existingBook.quantity + quantity;
            dispatch(updateQuantity(existingBook.id, updatedQuantity));
            showToast()
        } else {
            dispatch(addBook({
                id: uuidv4(),
                img: item.img,
                bookName: item.title,
                author: item.author,
                quantity: quantity,
                newPrice: item.newPrice,
                oldPrice: item.oldPrice,
                description: item.description,
                category: item.category,
            }));
            showAlreadyToast()
        }
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
        setQuantity(1);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    if (!show) {
        return null;
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
                        {showSuccessMessage && (
                            <div className="successMessage">Added to cart successfully!</div>
                        )}
                    </div>

                    <div className="inner-right">
                        <div className="inner-price">
                            <div className='newPrice'>${item.newPrice.toFixed(2)}</div>
                            <div className='oldPrice'>${item.oldPrice.toFixed(2)}</div>
                        </div>
                        <div className="inner-info">
                            <h1 className='modalbookTitle'>{item.title}</h1>
                            <h3 className='modalbookAuthor'>{item.author}</h3>
                            <h4 className='modalbookDesc'>{item.description}</h4>
                        </div>
                        <button className='viewDetails' onClick={handleDetails}>View Product Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

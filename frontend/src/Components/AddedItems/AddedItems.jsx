import React from 'react';
import './addeditems.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBookSelector } from '../../Redux/selector';

function AddedItems() {
    const cartBooks = useSelector(addBookSelector);
    
    return (
        <div className='addedItemsContainer'>
            <div className='cartHeader'>
                <h1>My shopping cart</h1>
            </div>
            <div className='cartContent'>
                {cartBooks.length === 0 ? (
                    <>
                        Nothing to show at the moment. <br />
                        <Link to={"/"}>Click here</Link> to continue shopping
                    </>
                ) : (
                    cartBooks.map(cartBook => (
                        <div className='cartItem' key={cartBook.id}>
                            <img className='cartImg' src={cartBook.img} alt="" />
                            <div className='cartItemInfo'>
                                <div className='cartBookName'>{cartBook.bookName}</div>
                                <div className='cartAuthor'>{cartBook.author}</div>
                                <div className='cartQuantity'>{cartBook.quantity}</div>
                                <div className='cartPrice'>${cartBook.price}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AddedItems;

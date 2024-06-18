import React, { useState, useEffect } from 'react';
import './addeditems.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBookSelector } from '../../Redux/selector';

function AddedItems() {
    const cartBooks = useSelector(addBookSelector);

    // State để lưu trữ số lượng của từng sản phẩm trong giỏ hàng
    const [quantities, setQuantities] = useState(
        cartBooks.map(cartBook => cartBook.quantity) // Khởi tạo số lượng từ danh sách sản phẩm hiện có
    );

    // State để lưu trữ tổng số tiền
    const [total, setTotal] = useState(0);

    // Hàm tính tổng số tiền
    const calculateTotal = () => {
        let totalPrice = 0;
        cartBooks.forEach((cartBook, index) => {
            totalPrice += cartBook.newPrice * quantities[index];
        });
        return totalPrice;
    }

    // Effect để cập nhật tổng khi số lượng hoặc danh sách sản phẩm thay đổi
    useEffect(() => {
        setTotal(calculateTotal());
    }, [quantities, cartBooks]);

    // Hàm tăng số lượng
    const increaseQuantity = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    }

    // Hàm giảm số lượng
    const decreaseQuantity = (index) => {
        if (quantities[index] > 1) {
            const newQuantities = [...quantities];
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    }

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
                    cartBooks.map((cartBook, index) => (
                        <div className='cartItem' key={cartBook.id}>
                            <p>{index + 1}</p>
                            <img className='cartImg' src={cartBook.img} alt="" />
                            <div className='cartItemInfo'>
                                <div className='cartBookName'>{cartBook.bookName}</div>
                                <div className='cartAuthor'>By: {cartBook.author}</div>
                                <div className="cartPrice">
                                    <div className='cartNewPrice'>${cartBook.newPrice}</div>
                                    <div className='cartOldPrice'>${cartBook.oldPrice}</div>
                                </div>
                                <div className="quantity">
                                    <button className='decrease' onClick={() => decreaseQuantity(index)}>-</button>
                                    <div className='quantityNumber'>{quantities[index]}</div>
                                    <button className='increase' onClick={() => increaseQuantity(index)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                <div className="cartTotal">
                    Total: ${total.toFixed(2)}
                </div>
            </div>
        </div>
    );
}

export default AddedItems;

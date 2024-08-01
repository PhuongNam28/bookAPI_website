import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBookSelector } from "../../Redux/selector";
import { removeBook, updateQuantity } from "../../Redux/BookRedux/bookActions";
import DeleteBookButton from "../DeleteBookButton/DeleteBookButton";

export const calculateTotal = (cartBooks, quantities) => {
  if (!Array.isArray(cartBooks) || cartBooks.length === 0) {
    return 0;
  }
  return cartBooks.reduce((totalPrice, cartBook, index) => {
    return totalPrice + cartBook.newPrice * quantities[index];
  }, 0);
};

function AddedItems() {
  const dispatch = useDispatch();
  const cartBooks = useSelector(addBookSelector);
  const [quantities, setQuantities] = useState(
    cartBooks.map((cartBook) => cartBook.quantity)
  );

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotal(cartBooks, quantities));
  }, [quantities, cartBooks]);

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    dispatch(updateQuantity(cartBooks[index].id, newQuantities[index]));
  };

  const decreaseQuantity = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      dispatch(updateQuantity(cartBooks[index].id, newQuantities[index]));
    }
  };

  const handleRemove = async (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="addedItemsContainer">
      <div className="cartHeader">
        <h1>My shopping cart</h1>
      </div>
      <div className="cartContent">
        {cartBooks.length === 0 ? (
          <>
            Nothing to show at the moment. <br /> 
            <Link to={"/"}>Click here</Link> to continue shopping
          </>
        ) : (
          cartBooks.map((cartBook, index) => (
            <div className="cartItem" key={cartBook.id}>
              <div className="cartLeft">
                <p>{index + 1}</p>
                <img className="cartImg" src={cartBook.img} alt="" />
                <div className="cartItemInfo">
                  <div className="cartBookName">{cartBook.bookName}</div>
                  <div className="cartAuthor">By: {cartBook.author}</div>
                  <div className="cartPrice">
                    <div className="cartNewPrice">${cartBook.newPrice}</div>
                    <div className="cartOldPrice">${cartBook.oldPrice}</div>
                  </div>
                  <div className="quantity">
                    <button
                      className="decrease"
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </button>
                    <div className="quantityNumber">{quantities[index]}</div>
                    <button
                      className="increase"
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="cartRight">
                <button className="whislistButton">Move to Wishlist</button>
                <DeleteBookButton onConfirm={() => handleRemove(cartBook.id)} />
              </div>
            </div>
          ))
        )}
        {cartBooks.length > 0 && (
          <div className="cartTotal">
            <div className="total">Total: ${total.toFixed(2)}</div>
            <Link to="/shippinginfo" className="buyButton">
              Buy Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddedItems;

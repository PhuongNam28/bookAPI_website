import React from 'react';
import Swal from 'sweetalert2';
import { showToast } from '../ToastAdded/ToastNewAdded';

const DeleteBookButton = ({ onConfirm }) => {
  const showAlert = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      showToast({
        title: "SUCCESS",
        text:   "you have successfully get rid of the book from your cart!!!",
        icon:  "success"
    })
      onConfirm();
    }
  };

  return (
    <button onClick={showAlert} className='removeButton delete-button'>
      Remove
    </button>
  );
};

export default DeleteBookButton;

// toastAdded.js
import Swal from 'sweetalert2';

export function showAlreadyToast() {
  Swal.fire({
    title: "SUCCESS",
    text: "You have added the book into your cart!",
    icon: "success"
  });
}

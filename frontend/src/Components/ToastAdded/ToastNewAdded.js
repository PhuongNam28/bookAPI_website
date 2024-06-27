// toastAdded.js
import Swal from 'sweetalert2';

export function showToast() {
  Swal.fire({
    title: "SUCCESS",
    text: "You have this book in your cart already! We will increase the quantity for you",
    icon: "success"
  });
}

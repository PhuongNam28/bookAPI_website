// toastAdded.js
import Swal from 'sweetalert2';

export function showAlreadyToast(props) {
  Swal.fire({
    title: props.title || "SUCCESS",
    text: props.text || "Product Increased",
    icon: props.icon || "success"
  });
}

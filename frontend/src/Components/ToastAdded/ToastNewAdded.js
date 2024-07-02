// toastAdded.js
import Swal from 'sweetalert2';

export function showToast(props) {
  Swal.fire({
    title: props.title || "SUCCESS",
    text: props.text || "Product Added",
    icon: props.icon || "success"
  });
}

import Swal from 'sweetalert2';

export function showToastCheckDelete(props) {
  Swal.fire({
      title:  props.title || "Are you sure?",
      text: props.text || "You won't be able to revert this!",
      icon: props.icon || "warning",
      showCancelButton:props.showCancelButton || true,
      confirmButtonColor: props.confirmButtonColor ||"#3085d6",
      cancelButtonColor: props.cancelButtonColor || "#d33",
      confirmButtonText: props.confirmButtonText ||"Yes, delete it!"
  });
}

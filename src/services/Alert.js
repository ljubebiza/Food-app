import Swal from "sweetalert2";

export function Alert(position, icon, title, timer) {
  Swal.fire({
    position: position,
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: timer,
  });
}

import "./styles.css";
import Swal from 'sweetalert2'
var button = document.querySelector("button");

button.addEventListener("click", function () {
  myFunk();
});

function myFunk() {
  Swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
  );
}

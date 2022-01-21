import "./styles.css";
import Swal from 'sweetalert2'
var button = document.querySelector("button");

button.addEventListener("click", function () {
  myFunk();
});

function myFunk() {
 alert(document.getElementById("a").value);
}

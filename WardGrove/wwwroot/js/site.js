$(document).ready(myFunction() );

function myFunction() {

var size = {
  width: window.innerWidth || document.body.clientWidth,
}
// Get the navbar
var navbar = document.getElementById("navbar");


 if (size <= 750) {
    navbar.classList.add("navbar-light");
    navbar.classList.add("mobileNavCSS");
    navbar.classList.remove("p-0");
   } 
   else {
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("mobileNavCSS")
  }
  console.log(size);
}


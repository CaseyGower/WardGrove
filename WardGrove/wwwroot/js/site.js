$(document).ready(myFunction() );

function myFunction() {

var size = {
  width: window.innerWidth || document.body.clientWidth,
}
<<<<<<< HEAD

// Get the navbar
var navbar = document.getElementById("navbar");

//Default Toggle Tag
var defaultToggle = document.getElementById("defaultNavToggle");


window.onload = function(){
if (size <= 700){
defaultToggle.classList.add("navbar-default");
}
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky && size >= 750) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
=======
// Get the navbar
var navbar = document.getElementById("navbar");
var navContent = document.getElementById("nav-content")


 if (size.width <= 750) {
    navbar.classList.add("navbar-light");
    navbar.classList.add("mobileNavCSS");
    navbar.classList.remove("p-0");
    navContent.classList.remove("customNavBar");
   } 
   else {
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("mobileNavCSS")
  }
  console.log(size);
}

>>>>>>> Peer-Review-Updates

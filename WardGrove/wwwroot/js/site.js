
// first get the size from the window
// if that didn't work, get it from the body
var size = {
  width: window.innerWidth || document.body.clientWidth,
}

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
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var link = document.querySelectorAll(".add-to-basket__call");
var popup = document.querySelector(".add-to-basket");
var overlay = document.querySelector(".add-to-basket__overlay");

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

for (var i=0; i < link.length; i++) {
  link[i].addEventListener("click", function(event)  {
    event.preventDefault();
    popup.classList.add("add-to-basket--show");
    overlay.classList.add("add-to-basket__overlay--show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup.classList.remove("add-to-basket--show");
    overlay.classList.remove("add-to-basket__overlay--show");
  }
});

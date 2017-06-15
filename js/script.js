// var link = document.querySelector(".week-offer__btn");
// var basket = document.querySelector(".catalog__item-icon");
// var popup = document.querySelector(".modal");
// var overlay = document.querySelector(".modal__overlay");
// var close = popup.querySelector(".modal--close");


// link.addEventListener("click", function(event)  {
//   event.preventDefault();
//   popup.classList.add("modal--show");
//   overlay.classList.add("modal__overlay--show");
// });


// window.addEventListener("keydown", function(event) {
//   if (event.keyCode === 27) {
//     popup.classList.remove("modal--show");
//     overlay.classList.remove("modal__overlay--show");
//   }
// });

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

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

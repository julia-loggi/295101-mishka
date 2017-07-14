var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var link = document.querySelectorAll(".popup__call");
var popup = document.querySelector(".popup");
var overlay = document.querySelector(".popup__overlay");

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
    popup.classList.add("popup--show");
    overlay.classList.add("popup__overlay--show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup.classList.remove("popup--show");
    overlay.classList.remove("popup__overlay--show");
  }
});

let navList = document.querySelector('.nav__list');
let navToggle = document.querySelector('.nav__toggle');

// navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('nav__list--closed')) {
    navList.classList.remove('nav__list--closed');
    navList.classList.add('nav__list--opened');
  } else {
    navList.classList.add('nav__list--closed');
    navList.classList.remove('nav__list--opened');
  }
});



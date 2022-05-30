let navList = document.querySelector('.header__nav-list');
let navToggle = document.querySelector('.header__nav-toggle');

navList.classList.remove('header__nav-list--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('header__nav-list--closed')) {
    navList.classList.remove('header__nav-list--closed');
    navList.classList.add('header__nav-list--opened');
  } else {
    navList.classList.add('header__nav-list--closed');
    navList.classList.remove('header__nav-list--opened');
  }
});

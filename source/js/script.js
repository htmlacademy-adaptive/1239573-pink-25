let navList = document.querySelector('.nav-list');
let navToggle = document.querySelector('.nav-toggle');

// navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('nav-list--closed')) {
    navList.classList.remove('nav-list--closed');
    navList.classList.add('nav-list--opened');
  } else {
    navList.classList.add('nav-list--closed');
    navList.classList.remove('nav-list--opened');
  }
});

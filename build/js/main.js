'use strict';

(function () {

  var toggles = document.querySelectorAll('.accordeon__button');

  [].forEach.call(toggles, function (toggle) {
    toggle.addEventListener('click', function () {
      var activeItem = document.querySelector('.accordeon__item--opened');
      var closest = toggle.closest('.accordeon__item');
      activeItem.classList.remove('accordeon__item--opened');

      closest.classList.add('accordeon__item--opened');
    });
  });

  var slides = document.querySelectorAll('.advantages__item');

  [].forEach.call(slides, function (slide) {
    slide.addEventListener('touch', function () {
      var activeItem = document.querySelector('.advantages__item--active');
      activeItem.classList.remove('advantages__item--active');
      slide.classList.add('advantages__item--active');
    });
  });

  var menuButton = document.querySelector('.page-header__navigation-button');
  var navigation = document.querySelector('.page-header__navigation');

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('page-header__navigation-button--close');
    navigation.classList.toggle('page-header__navigation--opened');
  });

// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

})();

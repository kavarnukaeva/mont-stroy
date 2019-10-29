'use strict';

(function () {

  var toggles = document.querySelectorAll('.accordeon__button');

  [].forEach.call(toggles, function (toggle) {
    toggle.addEventListener('click', function () {
      var item = toggle.closest('.accordeon__item');

      if (item.classList.contains('accordeon__item--opened')) {
        item.classList.remove('accordeon__item--opened');
      } else {
        item.classList.add('accordeon__item--opened');
      }
    });
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

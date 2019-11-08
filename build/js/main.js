'use strict';

(function () {

  var slides = document.querySelectorAll('.advantages__item');
  var menuButton = document.querySelector('.page-header__navigation-button');
  var navigation = document.querySelector('.page-header__navigation');
  var body = document.querySelector('body');
  var toggles = document.querySelectorAll('.services__title-wrapper');
  var scrollFeedback = document.querySelector('.page-header__feedback-button');
  var scrollServices = document.querySelector('.company__services-button');
  var scrollContact = document.querySelector('.company__feedback-button');
  var feedbackForm = document.querySelector('.feedback');
  var services = document.querySelector('.services');

  [].forEach.call(toggles, function (toggle) {
    toggle.addEventListener('click', function () {
      var activeItem = document.querySelector('.accordeon__item--opened');
      var closest = toggle.closest('.accordeon__item');
      activeItem.classList.remove('accordeon__item--opened');

      closest.classList.add('accordeon__item--opened');
    });
  });

  [].forEach.call(slides, function (slide) {
    slide.addEventListener('touch', function () {
      var activeItem = document.querySelector('.advantages__item--active');
      activeItem.classList.remove('advantages__item--active');
      slide.classList.add('advantages__item--active');
    });
  });

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('page-header__navigation-button--close');
    navigation.classList.toggle('page-header__navigation--opened');
  });

  document.addEventListener('click', function (evt) {
    if (!navigation.contains(evt.target) && evt.target !== menuButton
    && navigation.classList.contains('page-header__navigation--opened')) {
      navigation.classList.remove('page-header__navigation--opened');
      menuButton.classList.remove('page-header__navigation-button--close');
      body.classList.remove('overlay');
    }
  });

  var scrollTo = function (element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  };

  scrollFeedback.addEventListener('click', function () {
    scrollTo(feedbackForm);
  });

  scrollServices.addEventListener('click', function () {
    scrollTo(services);
  });

  scrollContact.addEventListener('click', function () {
    scrollTo(feedbackForm);
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

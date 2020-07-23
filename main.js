$(document).ready(function() {
  $('.next').click(function() {
    nextSlide();
  });

  $('.prev').click(function() {
    prevSlide();
  });

  // Funzioni
  function nextSlide() {

    var activeImg = $('.images img.active');
    var activeDot = $('.nav i.active');

    activeImg.removeClass('active');
    activeDot.removeClass('active');

    if (activeImg.hasClass('last')) {
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    } else {
      activeImg.next().addClass('active');
      activeDot.next().addClass('active');
    }
  }

  function prevSlide() {

    var activeImg = $('.images img.active');
    var activeDot = $('.nav i.active');

    activeImg.removeClass('active');
    activeDot.removeClass('active');

    if (activeImg.hasClass('first')) {
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    } else {
      activeImg.prev().addClass('active');
      activeDot.prev().addClass('active');
    }
  }
});

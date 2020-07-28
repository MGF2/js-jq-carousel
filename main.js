$(document).ready(function() {
  $('.next').click(function() {
    nextSlide();
  });

  $('.prev').click(function() {
    prevSlide();
  });

  $('.nav > i').click(function() {

    // var posizione = $(this).index();
    // var activeImg = $('.images img.active');
    // var activeDot = $('.nav i.active');
    //
    // activeImg.removeClass('active');
    // activeDot.removeClass('active');
    //
    // $('img').eq(posizione).addClass('active');
    // $(this).addClass('active');

    var posizione = $(this).index();
    $('.images img.active').removeClass('active');
    $('.nav i.active').removeClass('active');
    $('img').eq(posizione).addClass('active');
    $(this).addClass('active');
  });

  // Slide con tasti
  $(document).keydown( function (event) {

    if (event.keyCode == 39) {
      nextSlide();
    } else if (event.keyCode == 37) {
      prevSlide();
    }
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

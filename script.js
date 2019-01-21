$(document).ready(function() {

  $('#js-open-nav').click(function() {
      console.log('click');
     $('.nav').toggleClass('slide-in');
  });

});

// $('document').ready(function() {
//     $('.section-6-content-group').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//     });
// });

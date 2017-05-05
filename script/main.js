window.sr = ScrollReveal({
  reset: true,
  duration: 1000
});
sr.reveal('.sr-icons');
sr.reveal('.btn');

$(function () {
  $('.nav-link').bind('click', function(event) {
    event.preventDefault();
    var $anchor = $(this);

    $('body').animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000, 'easeInOutQuint');
  }),
  $('#homeIcon').bind('click', function(event) {
    event.preventDefault();
    var $anchor = $(this);

    $('body').animate({scrollTop: '0'}, 1000, 'easeInOutQuint');
  }),
  $('#headingChevron').bind('click', function(event) {
    event.preventDefault();
    var $anchor = $(this);

    $('body').animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000, 'easeInOutQuint');
  })
});

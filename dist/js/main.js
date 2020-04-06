$(document).ready(function(){

  $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel({ 
    fullWidth: true 
  });
  $('.button-collapse').sideNav();
  $('.modal').modal();
  $('.parallax').parallax();
  $('.collapsible').collapsible();
});

    

var typed = new Typed('.typedIlement', {
  strings: ['Web Design', 'Web Development', 'MERN-Stack'],
  smartBackspace: true,
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 500,
  startDelay: 1000,
  loop: true,
  showCursor: false,
});

particlesJS.load('particles-js', './../particles.json', function() {
  console.log('callback - particles.js config loaded');
});
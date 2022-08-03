$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:false,
      loop: true,
      items: 1,
      smartSpeed: 1000
    });
  });


  new WOW().init({
    smartSpeed: 2000,
    loop: true
  });
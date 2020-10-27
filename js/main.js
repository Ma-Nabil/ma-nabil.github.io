/*global window, $*/
$(function () {
    "use strict";
    // Adjust Slider Height
    var winH = $(window).height(),
        navH = $('.navbar').innerHeight(),
        upperH = $('.upper-bar').innerHeight();
    $('.slider,.slider .carousel-item').height(winH - (navH + upperH));
});

$(function () {
    "use strict";
    // Adjust Margin slider text
    var carCP = $('.carousel-control-prev').innerWidth();
    if (window.innerWidth >= 768) {
        $('.slider-text').css("margin-left", carCP);
    }
});
$(function () {
    "use strict";
    // change email height
    var emailH = $('.get-height').innerHeight();
    $('.give-height').height(emailH);
});


$('#blog-slider').carousel({
  interval: 10000
})

$('.blog .carousel .carousel-item').each(function(){
    var minPSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
})
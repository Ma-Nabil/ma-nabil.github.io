/*global window, $*/
$(function () {
    "use strict";
    // Adjust Heights
    var winH = $(window).height(),
        navH = $('.navbar').innerHeight(),
        upperH = $('.upper-bar').innerHeight(),
        valuesH = $('.values').innerHeight(),
        emailH = $('.get-height').innerHeight();
    $('.slider,.slider .carousel-item, .story').height(winH - (navH + upperH));
	$('.the-img').height(winH);
	$('.bottom-img').height(winH - (valuesH));
    $('.give-height').height(emailH);
});

$(function () {
    "use strict";
    // Adjust Margin slider text
    var carCP = $('.carousel-control-prev').innerWidth();
    if (window.innerWidth >= 768) {
        $('.slider-text').css("margin-left", carCP);
    }
});


$('#blog-slider').carousel({
  interval: 10000
});

$('.blog .carousel .carousel-item').each(function () {
    var minPSlide = 3,
        next = $(this).next(),
		i;
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (i = 0; i < minPSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});

// SLICK-SLIDER----OWL-CAROUSEL START
$(function() {
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplayHoverPause: true,
  	dots: true, // точки внизу
  	// dotsEach: 1,
  	navText: [
  	'<span class="arrow-owl arrow-left"></span>',
  	'<span class="arrow-owl arrow-right"></span>'
  	],
  });
});
// SLICK-SLIDER----OWL-CAROUSEL END
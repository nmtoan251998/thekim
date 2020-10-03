console.log('Developer: https://github.com/nmtoan251998')


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#spinner").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Background Set
	--------------------*/
	$('.adv-bg-set').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
    $(".advertisement-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		navText: ['', ''],
        smartSpeed: 1200,
		mouseDrag: false,
		autoplay: true,
		startPosition: 'URLHash'
    });


	/*------------------
		Back to top
	--------------------*/
	$("#backTotop").click(function() {
		$("html, body").animate({scrollTop: 0}, 1000);
	 });

	$(function(){
		var $refreshButton = $('#refresh');
		var $results = $('#css_result');

		function refresh(){
			var css = $('style.cp-pen-styles').text();
			$results.html(css);
		}

		refresh();
		$refreshButton.click(refresh);

		// Select all the contents when clicked
		$results.click(function(){
			$(this).select();
		});
	});



})(jQuery);

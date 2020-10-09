console.log('Developer: https://github.com/nmtoan251998')


'use strict';

function appendNewArrivalData() {

	const selector = document.querySelector('#new-arrivals-data-container');

	let content = '';
	// console.log(newArrivalsData);
	newArrivalsData.forEach(item => {
		content += `
			<div class="col-sm-6 col-md-4 col-lg-3 all-product-item-container">
				<div class="all-product-item">
					<div class="all-product-item-pic">
						<a href="${item.link}">
							<img loading=lazy  src="${item.src}" alt="image">
						</a>

						<a href="${item.link}" class="all-product-item-btn">Chi Tiết</a>
					</div>

					<div class="flex-w flex-t p-t-14">
						<div class="all-product-item-desc">
							<a href="${item.link}" class=" all-product-item-name">
								${item.name}
							</a>

							<span class=" cl3">${item.price}</span>
						</div>
					</div>
				</div>
			</div>
		`;
	});

	selector.innerHTML = content;
}

function appendBestSellerData() {
	const bestSellerProduct01 = document.querySelector('#best-seller-product-01');
	const bestSellerProduct02 = document.querySelector('#best-seller-product-02');


	bestSellerProduct01.innerHTML = `
		<div class="row mx-4 my-4 product-item-2 align-items-start">
			<div class="col-md-6 mb-md-0 featured-product-container">
				<a href="${bestSellerData01.link}">
					<img loading=lazy src="${bestSellerData01.src}" alt="Image" class="featured-product img-fluid">
				</a>
			</div>

			<div class="col-md-5 ml-auto product-title-wrap">
				<span class="number">01.</span>
				<h3 class="text-black mb-4">${bestSellerData01.name}</h3>
				<p class="mb-4">${bestSellerData01.desc}</p>

				<div class="mb-4">
					<h3 class="text-black h5">Price:</h3>
					<div class="price">${bestSellerData01.price}</div>
				</div>
				<p>
					<a target="_blank" href="https://www.facebook.com/thekimblousecantho" class="all-product-btn">Mua ngay</a>
				</p>
			</div>
		</div>`;

	bestSellerProduct02.innerHTML = `
		<div class="row mx-4 my-4 product-item-2 align-items-start">
			<div class="col-md-6 mb-md-0 order-1 order-md-2 featured-product-container">
				<a href="${bestSellerData02.link}">
					<img loading=lazy src="${bestSellerData02.src}" alt="Image" class="featured-product img-fluid">
				</a>
			</div>

			<div class="col-md-5 mr-auto product-title-wrap order-2 order-md-1">
				<span class="number">02.</span>
				<h3 class="text-black mb-4">${bestSellerData02.name}</h3>
				<p class="mb-4">${bestSellerData02.desc}</p>

				<div class="mb-4">
					<h3 class="text-black h5">Price:</h3>
					<div class="price">${bestSellerData02.price}</div>
				</div>
				<p>
					<a target="_blank" href="https://www.facebook.com/thekimblousecantho" class="all-product-btn">Mua ngay</a>
				</p>
			</div>
		</div>
	`;
}


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#spinner").delay(400).fadeOut("slow");


	// if($('vjs-big-play-button').length){
	// document.querySelector('#instructions').addEventListener('click',function (){
	// 	console.log("Click");
	// 	// $('#instructions').addClass('active');
	// })
	$('.vjs-big-play-button').on('click', function (){
		$('#instructions').addClass('active');
	})

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

	appendNewArrivalData();
	appendBestSellerData();
})(jQuery);

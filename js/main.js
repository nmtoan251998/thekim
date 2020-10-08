console.log('Developer: https://github.com/nmtoan251998')


'use strict';

function appendNewArrivalData() {
	const data = [
		{
			name: 'Violet Scrub',
			price: '750.000 VND',
			category: 'Scrub Nu',
			size: [],
			color: [],
			src: 'img/products/scrub/violet-scrub-01_1.jpg'
		},
		{
			name: 'General Scrub',
			price: '750.000 VND',
			category: 'Scrub Nu',
			size: [],
			color: [],
			src: 'img/products/scrub/nam-scrub-02_4.jpg'
		},
		{
			name: 'General Blouse',
			price: '850.000 VND',
			category: 'Blouse Nu',
			size: [],
			color: [],
			src: 'img/products/blouse/nam-blouse-01_1.jpg'
		},
		{
			name: 'Violet Blouse',
			price: '850.000 VND',
			category: 'Blouse Nu',
			size: [],
			color: [],
			src: 'img/products/blouse/nu-blouse-01_1.jpg'
		},
	]
	const selector = document.querySelector('#new-arrivals-data-container');

	let content = '';
	data.forEach(item => {
		content += `
			<div class="col-sm-6 col-md-4 col-lg-3 all-product-item-container">
				<div class="all-product-item">
					<div class="all-product-item-pic">
						<a href="product-detail.html">
							<img loading=lazy  src="${item.src}" alt="image">
						</a>

						<a href="product-detail.html" class="all-product-item-btn">Chi Tiết</a>
					</div>

					<div class="flex-w flex-t p-t-14">
						<div class="all-product-item-desc">
							<a href="product-detail.html" class=" all-product-item-name">
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
	const data01 = {
		name: 'General Women Labcoat',
		price: '850.000 VND',
		category: 'Scrub Nu',
		size: [],
		color: [],
		desc: 'The KIM premium stretch slim fit labcoats are tailored for comfort and style, with an ergonomic fit that is slimming and flattering. Designed for optimal range of motion, each sophisticated lab coat offers a precise fit that never restricts movement or luxurious.',
		src: 'img/products/blouse/nu-blouse-01_1.jpg'
	}
	const data02 = {
		name: 'General Women Scrub',
		price: '750.000 VND',
		category: 'Scrub Nu',
		size: [],
		color: [],
		desc: 'With a tailored fit, unparalleled fabric technology, and an emphasis on quality, The KIM scrub will help you look and feel your best in hospital.',
		src: 'img/products/scrub/violet-scrub-01_1.jpg'
	}

	const bestSellerProduct01 = document.querySelector('#best-seller-product-01');
	const bestSellerProduct02 = document.querySelector('#best-seller-product-02');

	
	bestSellerProduct01.innerHTML = `
		<div class="row mx-4 my-4 product-item-2 align-items-start">
			<div class="col-md-6 mb-md-0 featured-product-container">
				<a href="product-detail.html">
					<img loading=lazy src="${data01.src}" alt="Image" class="featured-product img-fluid">
				</a>
			</div>

			<div class="col-md-5 ml-auto product-title-wrap">
				<span class="number">01.</span>
				<h3 class="text-black mb-4"></h3>
				<p class="mb-4">${data01.desc}</p>

				<div class="mb-4">
					<h3 class="text-black h5">Price:</h3>
					<div class="price">${data01.price}</div>
				</div>
				<p>
					<a target="_blank" href="https://www.facebook.com/thekimblousecantho" class="all-product-btn">Mua ngay</a>
				</p>
			</div>
		</div>`;

	bestSellerProduct02.innerHTML = `
		<div class="row mx-4 my-4 product-item-2 align-items-start">
			<div class="col-md-6 mb-md-0 order-1 order-md-2 featured-product-container">
				<a href="product-detail.html">
					<img loading=lazy src="${data02.src}" alt="Image" class="featured-product img-fluid">
				</a>
			</div>

			<div class="col-md-5 mr-auto product-title-wrap order-2 order-md-1">
				<span class="number">02.</span>
				<h3 class="text-black mb-4">${data02.name}</h3>
				<p class="mb-4">${data02.desc}</p>

				<div class="mb-4">
					<h3 class="text-black h5">Price:</h3>
					<div class="price">${data02.price}</div>
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

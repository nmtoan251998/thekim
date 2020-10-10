
function appendClientFeedback() {
	const clientSaidDataContainer = document.querySelector('#client-said-data-container');
	let content = '';
	
	const data = [
		{
			ava: 'img/customers/customer-01.jpg',
			name: 'Thạc sĩ, Bác sĩ Trần Hoàng Duy',
			title: 'Giảng viên trường Đại học Y Dược Cần Thơ',
			feedback: 'Áo Blouse rất vừa, đẹp và sang trọng. Chất vải mặc vào rất thoải mái.',
			link: '',
		},
		{
			ava: 'img/customers/customer-02.jpg',
			name: 'Ho Le Bao An',
			title: 'CEO & Founder <a href="https://www.facebook.com/drholebaoan">Dr.Tony Cosmetic Dentist & Invisalign Provider</a>',
			feedback: 'Chất liệu vải đẹp, mặc rất vừa vặn, mát và sang trọng.'
		},
		{
			ava: 'img/customers/customer-03.jpg',
			name: 'Bao Ngoc Pham Tran',
			title: 'Dr Opthalmologist, CEO & Co-Founder <a href="https://www.facebook.com/matkinheyecare">Mat Kinh EYE CARE</a>',
			feedback: 'Áo Blouse nữ mặc vào rất form dáng. Chất liệu vải co dãn tốt, nhìn tổng thể rất sang trọng. Chiếc áo Blouse đem lại cho mình nhiều tự tin hơn khi tiếp xúc với các bệnh nhân.'
		},
		{
			ava: 'img/customers/customer-04.jpg',
			name: 'Nhà thuốc ưu tú, Bác sĩ CK 2 Nguyễn Trọng Phương',
			title: 'Giám đốc bệnh viện Hải Châu, Đà Nẵng',
			feedback: 'Cảm ơn The KIM cho tôi trải nghiệm 1 chiếc áo Blouse với chất liệu vải cao cấp, mặc vào rất sang trọng và thoải mái, đặc biệt thêu tên rất đẹp. Được đựng trong 1 chiếc hộp rất cao cấp và sang trọng. Đánh giá 5 sao cho sản phẩm.'
		},
	]

	data.forEach(item => {
		content += `
			<div class="item ">
				<div class="testimony-wrap text-center">
					<div class="user-img mb-5" style="background-image: url(${item.ava})">
				<span class="quote d-flex align-items-center justify-content-center">
					<img width="16" height="16" src="./img/icons/left-quote.svg" alt="">
				</span>
					</div>
					<div class="text">
						<p>${item.feedback}</p>
						<p class="name">${item.name}</p>
						<span class="position">${item.title}</span>
					</div>
				</div>
			</div>
		`;
	});

	clientSaidDataContainer.innerHTML = content;
}

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

function appendBgImg() {
	const divSelector = document.createElement('div');
	divSelector.style.backgroundImage = 'url(img/client-said-bg-img-02.jpg)';
	divSelector.classList.add('bg-fixed');

	document.querySelector('body').appendChild(divSelector);
}

function appendClientFeedbackBgImg() {
    const selector = document.querySelector('#client-feedback');
    selector.style.backgroundImage = 'url(img/client-said-bg-img-02.jpg)';
}

document.addEventListener("DOMContentLoaded", () => {
    appendNewArrivalData();
    appendBestSellerData();
    appendClientFeedback();

	setTimeout(() => {
        appendBgImg();
    }, 1000);

    setTimeout(() => {
        appendClientFeedbackBgImg();
    }, 2000);
})
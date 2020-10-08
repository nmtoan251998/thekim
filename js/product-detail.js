const blousenam01 = {
    name: 'Men Labcoat',
    price: '850.000 VND',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Women's Scrub Pants.",
    colors: [
        {
            id: 'white',
            label: 'White',
        },
        {
            id: 'black',
            label: 'Black',
        },
        {
            id: 'teal',
            label: 'Teal',
        },
        {
            id: 'dark-blue',
            label: 'Dark blue',
        },
        {
            id: 'blue',
            label: 'Blue',
        },
    ],
    sizes: [
        'S',
        'M',
        'L',
        'XL',
        'XXL',
    ],
    imgSrc: [
        'img/products/blouse/nam-blouse-01_1.jpg',
        'img/products/blouse/nam-blouse-01_2.jpg',
        'img/products/blouse/nam-blouse-01_3.jpg',
        'img/products/blouse/nam-blouse-01_4.jpg',
    ],
}

const blousenu01 = {
    name: 'Women Labcoat',
    price: '850.000 VND',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Women's Scrub Pants.",
    colors: [
        {
            id: 'white',
            label: 'White',
        },
        {
            id: 'black',
            label: 'Black',
        },
        {
            id: 'teal',
            label: 'Teal',
        },
        {
            id: 'dark-blue',
            label: 'Dark blue',
        },
        {
            id: 'blue',
            label: 'Blue',
        },
    ],
    sizes: [
        'XS',
        'S',
        'M',
        'L',
    ],
    imgSrc: [
        'img/products/blouse/nu-blouse-01_1.jpg',
        'img/products/blouse/nu-blouse-01_2.jpg',
        'img/products/blouse/nu-blouse-01_3.jpg',
        'img/products/blouse/nu-blouse-01_4.jpg',
    ],
}

function innerProduct(data) {
    const productContainer = document.querySelector('#product-detail-container');

    let content = '';
    content += `
    <div class="p-l-25 p-r-30 p-lr-0-lg">
        <div class="wrap-slick3 flex-sb flex-w">
            <div class="wrap-slick3-dots"></div>
            <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

            <div class="slick3 gallery-lb">`;
    data.imgSrc.forEach(src => {
        content += `
            <div class="item-slick3" data-thumb="${src}">
                <div class="wrap-pic-w pos-relative">
                    <a href="${src}">
                        <img src="${src}" alt="IMG-PRODUCT">
                    </a>
                </div>
            </div>
        `;
    });
    content += `
                </div>
            </div>
        </div>`;

    productContainer.innerHTML = content;


    const productName = document.querySelector('#product-name');
    const productPrice = document.querySelector('#product-price');
    const productDesc = document.querySelector('#product-desc');
    const productColor = document.querySelector('#product-color');
    const productSize = document.querySelector('#product-size');

    productName.textContent = data.name;
    productPrice.textContent = data.price;
    productDesc.textContent = data.desc;

    let colorContent = '';
    data.colors.forEach(color => {
        colorContent += `
            <input type="radio" name="radio-group" id="${color.id}" value="${color.label}"/>
            <label for="${color.id}">${color.label}</label>
        `;
    });
    productColor.innerHTML = colorContent;

    let sizeContent = '';
    data.sizes.forEach(size => {
        sizeContent += `<option>Size ${size}</option>`;
    });
    productSize.innerHTML = sizeContent;
}

function renderMenu() {
    const query = window.location.search;
    const product = query.slice(9);

    switch(product) {
        case 'nam-blouse-01':
            innerProduct(blousenam01);
            break;
        case 'nu-blouse-01':
            innerProduct(blousenu01);
            break;
        default:
            innerProduct(blousenam01);
            break;
    }
}

window.onload = renderMenu();

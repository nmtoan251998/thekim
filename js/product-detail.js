const COLOR_PALETTES = {
    white: {
        id: 'white',
        label: 'White',
    },
    black: {
        id: 'black',
        label: 'Black',
    },
    teal: {
        id: 'teal',
        label: 'Teal',
    },
    carribean_blue: {
        id: 'carribean-blue',
        label: 'Carribean Blue',
    },
    sky_blue: {
        id: 'blue-sky',
        label: 'Blue Sky',
    },
    red: {
        id: 'red',
        label: 'Red',
    },
    purple: {
        id: 'purple',
        label: 'Purple',
    },
}

const MEN_SCRUB_SIZES = ['S','M','L','XL', 'XXL'];
const MEN_LABCOAT_SIZES = ['S','M','L','XL','XXL'];

const WOMEN_LABCOAT_SIZES = ['S','M','L', 'XL', 'XXL'];
const WOMEN_SCRUB_SIZES = ['S','M','L', 'XL', 'XXL'];

const MEN_SIZES_DETAIL = [
    {
        size: 'S',
        height: '1m60-1m65',
        width: '55-60kg'
    },
    {
        size: 'M',
        height: '1m64-1m69',
        width: '60-65kg',
    },
    {
        size: 'L',
        height: '1m70-1m74',
        width: '66-70kg',
    },
    {
        size: 'XL',
        height: '1m74-1m76',
        width: '70-76kg',
    },
    {
        size: 'XXL',
        height: '1m65-1m77',
        width: '76-80kg',
    },
]

const WOMEN_SIZES_DETAIL = [
    {
        size: 'S',
        height: '1m48-1m53',
        width: '38-43kg'
    },
    {
        size: 'M',
        height: '1m53-1m55',
        width: '43-46kg',
    },
    {
        size: 'L',
        height: '1m53-1m58',
        width: '46-53kg',
    },
    {
        size: 'XL',
        height: '1m55-1m62',
        width: '53-57kg',
    },
    {
        size: 'XXL',
        height: '1m55-1m66',
        width: '57-66kg',
    },
]

const blousenam01 = {
    gender: 'male',
    infor: {
        material: '60% cotton, 40% poliester - Cotton Silk USA',
        height: '110 cm',
        width: '',
    },
    name: 'Picasso Labcoat',
    price: '1.150.000 VND (~$50)',
    desc: "Simple & Tailored Non-Stretch Scrub. Best with the Classic Fit Men's Labcoat.",
    colors: [
        COLOR_PALETTES.white,
    ],
    sizes: MEN_LABCOAT_SIZES,
    imgSrc: [
        'img/products/blouse/nam-blouse-01_1.jpg',
        'img/products/blouse/nam-blouse-01_2.jpg',
        'img/products/blouse/nam-blouse-01_3.jpg',
    ],
}

const blousenam02 = {
    gender: 'male',
    infor: {
        material: '60% cotton, 40% poliester - Cotton Silk USA',
        height: '110 cm',
        width: '',
    },
    name: 'President Labcoat',
    price: '2.250.000 VND (~$98)',
    desc: "Simple & Tailored Non-Stretch Scrub. Best with the Classic Fit Men's Labcoat.",
    colors: [
        COLOR_PALETTES.white,
    ],
    sizes: MEN_LABCOAT_SIZES,
    imgSrc: [
        'img/products/blouse/nam-blouse-02_1.jpg',
        'img/products/blouse/nam-blouse-02_2.jpg',
    ],
}

const blousenam03 = {
    gender: 'male',
    infor: {
        material: '60% cotton, 40% poliester - Cotton Silk USA',
        height: '110 cm',
        width: '',
    },
    name: 'General Labcoat',
    price: '850.000 VND (~$37)',
    desc: "Simple & Tailored Non-Stretch Scrub. Best with the Classic Fit Men's Labcoat.",
    colors: [
        COLOR_PALETTES.white,
    ],
    sizes: MEN_LABCOAT_SIZES,
    imgSrc: [
        'img/products/blouse/nam-blouse-03_1.jpg',
        'img/products/blouse/nam-blouse-03_2.jpg',
        'img/products/blouse/nam-blouse-03_3.jpg',
        'img/products/blouse/nam-blouse-03_4.jpg',
    ],
}

const blousenu01 = {
    gender: 'female',
    infor: {
        material: '60% cotton, 40% poliester - Cotton Silk USA',
        height: '110 cm',
        width: '',
    },
    name: 'Jessica Labcoat',
    price: '850.000 VND (~$37)',
    desc: "Simple & Tailored Non-Stretch Scrub. Best with the Classic Fit Women's Labcoat.",
    colors: [
        COLOR_PALETTES.white,
    ],
    sizes: WOMEN_LABCOAT_SIZES,
    imgSrc: [
        'img/products/blouse/nu-blouse-01_1.jpg',
        'img/products/blouse/nu-blouse-01_2.jpg',
        'img/products/blouse/nu-blouse-01_3.jpg',
        'img/products/blouse/nu-blouse-01_4.jpg',
    ],
}

const blousenu02 = {
    gender: 'female',
    infor: {
        material: '60% cotton, 40% poliester - Cotton Silk USA',
        height: '110 cm',
        width: '',
    },
    name: 'Victoria Labcoat',
    price: '1.150.000 VND (~$50)',
    desc: "Simple & Tailored Non-Stretch Scrub. Best with the Classic Fit Women's Labcoat.",
    colors: [
        COLOR_PALETTES.white,
    ],
    sizes: WOMEN_LABCOAT_SIZES,
    imgSrc: [
        'img/products/blouse/nu-blouse-02_1.jpg',
        'img/products/blouse/nu-blouse-02_2.jpg',
        'img/products/blouse/nu-blouse-02_3.jpg',
        'img/products/blouse/nu-blouse-02_4.png',
    ],
}

const namscrub01 = {
    gender: 'male',
    infor: {
        material: 'Cotton Slim Cool, Italy',
        height: '62cm',
        width: '58cm',
    },
    name: 'Sentosa Scrub',
    price: '750.000 VND (~$33)',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Men's Scrub Pants.",
    colors: [
        COLOR_PALETTES.teal,
        COLOR_PALETTES.carribean_blue,
        COLOR_PALETTES.sky_blue,
        COLOR_PALETTES.red,
        COLOR_PALETTES.purple,
    ],
    sizes: MEN_SCRUB_SIZES,
    imgSrc: [
        'img/products/scrub/nam-scrub-01_1.jpg',
        'img/products/scrub/nam-scrub-01_2.jpg',
        'img/products/scrub/nam-scrub-01_3.jpg',
        'img/products/scrub/nam-scrub-01_4.jpg',
    ],
}

const namscrub02 = {
    gender: 'male',
    infor: {
        material: 'Cotton Slim Cool, Italy',
        height: '62cm',
        width: '58cm',
    },
    name: 'Sentosa Scrub',
    price: '750.000 VND (~$33)',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Men's Scrub Pants.",
    colors: [
        COLOR_PALETTES.teal,
        COLOR_PALETTES.carribean_blue,
        COLOR_PALETTES.sky_blue,
        COLOR_PALETTES.red,
        COLOR_PALETTES.purple,
    ],
    sizes: MEN_SCRUB_SIZES,
    imgSrc: [
        'img/products/scrub/nam-scrub-02_1.jpg',
        'img/products/scrub/nam-scrub-02_2.jpg',
        'img/products/scrub/nam-scrub-02_3.jpg',
        'img/products/scrub/nam-scrub-02_4.jpg',
    ],
}

const namscrub03 = {
    gender: 'male',
    infor: {
        material: 'Cotton Slim Cool, Italy',
        height: '62cm',
        width: '58cm',
    },
    name: 'Sentosa Scrub',
    price: '750.000 VND (~$33)',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Men's Scrub Pants.",
    colors: [
        COLOR_PALETTES.teal,
        COLOR_PALETTES.carribean_blue,
        COLOR_PALETTES.sky_blue,
        COLOR_PALETTES.red,
        COLOR_PALETTES.purple,
    ],
    sizes: MEN_SCRUB_SIZES,
    imgSrc: [
        'img/products/scrub/nam-scrub-03_1.jpg',
        'img/products/scrub/nam-scrub-03_2.jpg',
        'img/products/scrub/nam-scrub-03_3.jpg',
    ],
}

const namscrub04 = {
    gender: 'male',
    infor: {
        material: 'Cotton Slim Cool, Italy',
        height: '62cm',
        width: '58cm',
    },
    name: 'Sentosa Scrub',
    price: '750.000 VND (~$33)',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Men's Scrub Pants.",
    colors: [
        COLOR_PALETTES.teal,
        COLOR_PALETTES.carribean_blue,
        COLOR_PALETTES.sky_blue,
        COLOR_PALETTES.red,
        COLOR_PALETTES.purple,
    ],
    sizes: MEN_SCRUB_SIZES,
    imgSrc: [
        'img/products/scrub/nam-scrub-04_1.jpg',
        'img/products/scrub/nam-scrub-04_2.jpg',
        'img/products/scrub/nam-scrub-04_3.jpg',
        'img/products/scrub/nam-scrub-04_4.jpg',
    ],
}

const violetscrub01 = {
    gender: 'female',
    infor: {
        material: 'Cotton Slim Cool, Italy',
        height: '57cm',
        width: '45cm',
    },
    name: 'Violet Scrub',
    price: '750.000 VND (~$33)',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Women's Scrub Pants.",
    colors: [
        COLOR_PALETTES.white,
        COLOR_PALETTES.teal,
        COLOR_PALETTES.carribean_blue,
        COLOR_PALETTES.sky_blue,
        COLOR_PALETTES.red,
        COLOR_PALETTES.purple,
    ],
    sizes: WOMEN_SCRUB_SIZES,
    imgSrc: [
        'img/products/scrub/violet-scrub-01_1.jpg',
        'img/products/scrub/violet-scrub-01_2.jpg',
        'img/products/scrub/violet-scrub-01_3.jpg',
        'img/products/scrub/violet-scrub-01_4.jpg',
    ],
}

const violetscrub02 = {
    gender: 'female',
    infor: {
        material: 'Cotton Slim Cool, Italy',
        height: '57cm',
        width: '45cm',
    },
    name: 'Violet Scrub',
    price: '750.000 VND (~$33)',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Women's Scrub Pants.",
    colors: [
        COLOR_PALETTES.white,
        COLOR_PALETTES.teal,
        COLOR_PALETTES.carribean_blue,
        COLOR_PALETTES.sky_blue,
        COLOR_PALETTES.red,
        COLOR_PALETTES.purple,
    ],
    sizes: WOMEN_SCRUB_SIZES,
    imgSrc: [
        'img/products/scrub/violet-scrub-02_1.jpg',
        'img/products/scrub/violet-scrub-02_2.jpg',
        'img/products/scrub/violet-scrub-02_3.jpg',
        'img/products/scrub/violet-scrub-02_4.jpg',
    ],
}

const violetscrub03 = {
    gender: 'female',
    infor: {
        material: 'Cotton Slim Cool, Italy',
        height: '57cm',
        width: '45cm',
    },
    name: 'Violet Scrub',
    price: '750.000 VND (~$33)',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Women's Scrub Pants.",
    colors: [
        COLOR_PALETTES.white,
        COLOR_PALETTES.teal,
        COLOR_PALETTES.carribean_blue,
        COLOR_PALETTES.sky_blue,
        COLOR_PALETTES.red,
        COLOR_PALETTES.purple,
    ],
    sizes: WOMEN_SCRUB_SIZES,
    imgSrc: [
        'img/products/scrub/violet-scrub-03_1.jpg',
        'img/products/scrub/violet-scrub-03_2.jpg',
        'img/products/scrub/violet-scrub-03_3.jpg',
        'img/products/scrub/violet-scrub-03_4.jpg',
    ],
}

const violetscrub04 = {
    gender: 'female',
    infor: {
        material: 'Cotton Slim Cool, Italy',
        height: '57cm',
        width: '45cm',
    },
    name: 'Violet Scrub',
    price: '750.000 VND (~$33)',
    desc: "Simple & Tailored Non-Stretch Scrub. Color options pair best with the Classic Fit Women's Scrub Pants.",
    colors: [
        COLOR_PALETTES.white,
        COLOR_PALETTES.teal,
        COLOR_PALETTES.carribean_blue,
        COLOR_PALETTES.sky_blue,
        COLOR_PALETTES.red,
        COLOR_PALETTES.purple,
    ],
    sizes: WOMEN_SCRUB_SIZES,
    imgSrc: [
        'img/products/scrub/violet-scrub-04_1.jpg',
        'img/products/scrub/violet-scrub-04_2.jpg',
        'img/products/scrub/violet-scrub-04_3.jpg',
        'img/products/scrub/violet-scrub-04_4.jpg',
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

    const productInforTab = document.querySelector('#information');
    const productDescTab = document.querySelector('#product-size-detail-container');

    let productDescTabContent = '';
    if (data.gender === 'male') {
        productDescTabContent = renderSizeDetail(MEN_SIZES_DETAIL);
    } else {
        productDescTabContent = renderSizeDetail(WOMEN_SIZES_DETAIL);
    }

    function renderSizeDetail(details) {
        let content = '';
        details.forEach(sizeDetail => {
            content += `
                <li class="flex-w flex-t p-b-7">
                    <span class="stext-102 cl3 size-205">
                        ${sizeDetail.size}
                    </span>

                    <span class="stext-102 cl6 size-206">
                        ${sizeDetail.height}
                    </span>

                    <span class="stext-102 cl6 size-206">
                        ${sizeDetail.width}
                    </span>
                </li>
            `;
        })

        return content;
    }

    productDescTab.innerHTML = productDescTabContent;

    const sizeInfor = data.sizes.map(size => ` ${size}`);
    const colorInfor = data.colors.map(color => ` ${color.label}`);
    let productInforTabContent = ``;
    productInforTabContent += `
        <div class="row">
            <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                <ul class="p-lr-28 p-lr-15-sm">
                    <li class="flex-w flex-t p-b-7">
                        <span class="stext-102 cl3 size-205">
                            Ngang
                        </span>

                        <span class="stext-102 cl6 size-206">
                            ${data.infor.width}
                        </span>
                    </li>

                    <li class="flex-w flex-t p-b-7">
                        <span class="stext-102 cl3 size-205">
                            Dài
                        </span>

                        <span class="stext-102 cl6 size-206">
                            ${data.infor.height}
                        </span>
                    </li>

                    <li class="flex-w flex-t p-b-7">
                        <span class="stext-102 cl3 size-205">
                            Chất liệu
                        </span>

                        <span class="stext-102 cl6 size-206">
                            ${data.infor.material}
                        </span>
                    </li>

                    <li class="flex-w flex-t p-b-7">
                        <span class="stext-102 cl3 size-205">
                            Màu sắc
                        </span>

                        <span class="stext-102 cl6 size-206">
                            ${colorInfor}
                        </span>
                    </li>

                    <li class="flex-w flex-t p-b-7">
                        <span class="stext-102 cl3 size-205">
                            Size
                        </span>

                        <span class="stext-102 cl6 size-206">
                            ${sizeInfor}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    `;
    productInforTab.innerHTML = productInforTabContent;
}

function renderMenu() {
    const query = window.location.search;
    const product = query.slice(9);

    const ProductEnums = {
        nam_blouse_01: 'nam-blouse-01',
        nam_blouse_02: 'nam-blouse-02',
        nam_blouse_03: 'nam-blouse-03',
        nu_blouse_01: 'nu-blouse-01',
        nu_blouse_02: 'nu-blouse-02',
        nam_scrub_01: 'nam-scrub-01',
        nam_scrub_02: 'nam-scrub-02',
        nam_scrub_03: 'nam-scrub-03',
        nam_scrub_04: 'nam-scrub-04',
        violet_scrub_01: 'violet-scrub-01',
        violet_scrub_02: 'violet-scrub-02',
        violet_scrub_03: 'violet-scrub-03',
        violet_scrub_04: 'violet-scrub-04',
    }

    switch(product) {
        case ProductEnums.nam_blouse_01:
            innerProduct(blousenam01);
            break;
        case ProductEnums.nam_blouse_02:
            innerProduct(blousenam02);
            break;
        case ProductEnums.nam_blouse_03:
            innerProduct(blousenam03);
            break;
        case ProductEnums.nu_blouse_01:
            innerProduct(blousenu01);
            break;
        case ProductEnums.nu_blouse_02:
            innerProduct(blousenu02);
            break;
        case ProductEnums.nam_scrub_01:
            innerProduct(namscrub01);
            break;
        case ProductEnums.nam_scrub_02:
            innerProduct(namscrub02);
            break;
        case ProductEnums.nam_scrub_03:
            innerProduct(namscrub03);
            break;
        case ProductEnums.nam_scrub_04:
            innerProduct(namscrub04);
            break;
        case ProductEnums.violet_scrub_01:
            innerProduct(violetscrub01);
            break;
        case ProductEnums.violet_scrub_02:
            innerProduct(violetscrub02);
            break;
        case ProductEnums.violet_scrub_03:
            innerProduct(violetscrub03);
            break;
        case ProductEnums.violet_scrub_04:
            innerProduct(violetscrub04);
            break;
        default:
            innerProduct(blousenam01);
            break;
    }
}

window.onload = renderMenu();

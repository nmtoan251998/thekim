function appendProductItems(selector, data) {
    let content = '';
    data.forEach(item => {
        content += `
            <div class="col-sm-6 col-md-4 col-lg-3 all-product-item-container">
                <div class="all-product-item">
                    <div class="all-product-item-pic">
                        <a href="${item.link}">
                            <img src="${item.src}" alt="image">
                        </a>

                        <a href="${item.link}" class="all-product-item-btn">Chi Tiết</a>
                    </div>

                    <div class="flex-w flex-t p-t-14">
                        <div class="all-product-item-desc">
                            <a href="${item.link}" class="all-product-item-name">
                                ${item.name}
                            </a>

                            <span class="cl3">${item.price}</span>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    selector.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
    const scrubDataContainer = document.querySelector('#product-container-01');
    const blouseDataContainer = document.querySelector('#product-container-02');

    appendProductItems(scrubDataContainer, scrubData);
    appendProductItems(blouseDataContainer, blouseData);

    const title01 = document.querySelector('#product-type-01');
    title01.textContent = 'Scrub';

    const title02 = document.querySelector('#product-type-02');
    title02.textContent = 'Blouse';
});
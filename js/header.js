function appendHeader() {
    document.querySelector('.top-nav-bar').innerHTML = `
        <nav id="top-navbar" class="site-navbar navbar navbar-expand-md navbar-dark">
            <a class="navbar-brand site-logo" href="index.html#">
                <h2 class="thekim-brand">The KIM</h2>
                <p>International Labcoats</p>
            </a>

            <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Trang chủ</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="explore.html">Tầm nhìn và Sứ mệnh</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="all-products.html">Tất cả sản phẩm</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Liên hệ</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            const yPos = window.scrollY;
    
            const navbar = document.querySelector('#top-navbar');
    
            const navbarChangePos = 350;
            if (yPos >= navbarChangePos) {
                navbar.classList.add('top-navbar-scroll');
            }
    
            if (yPos < navbarChangePos) {
                if (navbar.classList.contains('top-navbar-scroll')) {
                    navbar.classList.remove('top-navbar-scroll');
                }
            }
        });

        const scrollTopBtn = document.querySelector('.scroll-to-top');
        window.addEventListener('scroll', () => {
            const yPos = window.scrollY;
            const btnDisplayPos = 550;
            if (yPos >= btnDisplayPos) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });
    }, 1500)
});

window.onload = appendHeader;
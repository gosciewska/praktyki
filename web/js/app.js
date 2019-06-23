window.onload = function () {

    var BODY = this.document.querySelector('body'),
        btn_cookies = this.document.querySelector('[data-cookies-btn]');
    hero_cookies = this.document.getElementById('hero-cookies');
    var forms = document.querySelectorAll('form');
    var inputs = document.querySelectorAll('.content-text__input');
    var isFilledClass = 'is-filled';

    if (document.cookie != "accept=true") {
        hero_cookies.style.display = "block";

    }

    btn_cookies.onclick = function () {
        document.cookie = "accept=true";
        hero_cookies.style.display = "none";
    };

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
        },
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },


        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })


    forms = [...forms];
    inputs = [...inputs];

    forms.forEach(function (form) {

        form.addEventListener('change', function (event) {
            var target = event.target;

            if (!target.classList.contains('content-text__input')) {
                return;
            }
            if (target.value !== '') {
                target.classList.add(isFilledClass);
            } else {
                target.classList.remove(isFilledClass);
            }
        });
    });

};


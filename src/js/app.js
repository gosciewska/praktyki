window.onload = function () {

    var BODY = this.document.querySelector('body'),
        btn_cookies = this.document.querySelector('[data-cookies-btn]');
    var isFilledClass = 'is-filled';
    var info = this.document.getElementById('content-info');
    var hero_cookies = this.document.getElementById('hero-cookies');
    var form = document.querySelector('[data-js=form]');
    const btnForm = document.querySelector('[data-js=form-btn]');

    var inputs = document.querySelectorAll('.content-text__input');
    inputs = [...inputs];

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

    form.onsubmit = function () {
        btnForm.onclick = function () {
            var error = false;
            const formRequier = document.querySelectorAll('[required]');
            formRequier.forEach(function (item) {
                if (!item.checkValidity()) {
                    error = true;
                }
            });

            if (error == false) {
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].classList.remove(isFilledClass);
                }
                // here send form
            }
        }
        form.reset();
        info.innerHTML = "I send it. Thank you!";
        return false;
    }
};
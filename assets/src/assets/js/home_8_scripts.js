$(function() {


    // projects change background 
    $('.tc-portfolio-style8 .nav-pills .nav-item').on('mouseenter', function() {
        var tab_id = $(this).attr('data-tab');
        $('.tc-portfolio-style8 .nav-pills .nav-item').removeClass('current');
        $(this).addClass('current');

        $('.tc-portfolio-style8 .imgs .tab-img').removeClass('current');
        $("#" + tab_id).addClass('current');

        if ($(this).hasClass('current')) {
            return false;
        }
    });

    $('.tc-portfolio-style8 .nav-link').mouseenter(function() {
        $(this).click();
    });

    // ------ sidemenu 1 ------
    $(".menu-icon").on("click", function() {
        $(this).toggleClass("active");
        $("#side_menu").toggleClass("show");
        $(".side_overlay").toggleClass("show");
    })

    $(".side_menu_cls").on("click", function() {
        $("#side_menu").removeClass("show");
        $(".side_overlay").removeClass("show");
    })

    $(".side_overlay").on("click", function() {
        $("#side_menu").removeClass("show");
        $(this).removeClass("show");
    })

});


// ------------ swiper sliders -----------
$(document).ready(function() {


    // ------------ fullpage-slider8 -----------
    var Vswiper = new Swiper('.fullpage-slider8', {
        slidesPerView: 1,
        spaceBetween: 0,
        // centeredSlides: true,
        speed: 1000,
        direction: 'vertical',
        pagination: {
            el: '.full-page-pagination .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
        mousewheel: {
            releaseOnEdges: true,
        },
        breakpoints: {
            0: {
                mousewheel: false,
                direction: 'horizontal',
            },
            480: {
                mousewheel: false,
                direction: 'horizontal',
            },
            787: {
                mousewheel: false,
                direction: 'horizontal',
            },
            991: {
                mousewheel: false,
                direction: 'horizontal',
            },
            1200: {
                // slidesPerView: 5,
            }
        },
        on: {
            slideChange: function() {
                // Check if the active slide has the specified classes and add 'active' to body
                if ($(this.slides[this.activeIndex]).hasClass('reverse-color')) {
                    $('body').addClass('reverse-color');
                } else {
                    $('body').removeClass('reverse-color');
                }
            },
        },
    });

    // ------------ clients-slider -----------
    var swiper = new Swiper('.clients-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.clients-slider .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.clients-arrows .swiper-button-next',
            prevEl: '.clients-arrows .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

});


// ------------ scripts -----------
$(document).ready(function() {


});
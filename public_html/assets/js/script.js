window.addEventListener('DOMContentLoaded',function(){
    $('.menu-btn').click(function(){
        $(this).toggleClass('is-open');
        $(this).siblings('.menu').toggleClass('is-open');
    });
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },

        speed: 2000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // If we need pagination
        // pagination: {
        // el: '.swiper-pagination',
        // },

        // Navigation arrows
        // navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        // scrollbar: {
        // el: '.swiper-scrollbar',
        // },
    });
})
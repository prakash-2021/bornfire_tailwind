let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination2",
        type: "fraction",
    },
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
});
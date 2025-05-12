const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 5000,
},
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 1,
        },
    },
    spaceBetween: 30,
});

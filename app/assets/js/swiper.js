let course = new Swiper(".course-swiper", {
  slidesPerView: 8,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});
let swiper = new Swiper(".swiper", {
    slidesPerView: 6,
});
let avatar = new Swiper(".recommend-avatar", {
    loop: true,
    effect: "fade",
});
let recommendText = new Swiper(".recommend-text", {
    loop: true,
    effect: "fade",
    grabCursor: true,
});
let recommendImg = new Swiper(".recommend-img", {
    loop: true,
    effect: "fade",
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".recommend-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    controller: {
        control: [recommendText, avatar],
        by: "container",
    },
});
recommendText.controller.control = [recommendImg];
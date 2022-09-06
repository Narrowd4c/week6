"use strict";

var menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", function () {
  document.querySelector("#menu-mobile").classList.toggle("d-none");
});
"use strict";

AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded",
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init",
  // class applied after initialization
  animatedClassName: "aos-animate",
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point //120~150
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 1000,
  // values from 0 to 3000, with step 50ms
  easing: "ease",
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: true,
  // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation

});
"use strict";

if (document.querySelector('#date')) {
  var date = document.querySelector('#date');
  var datepicker = new Datepicker(date, {
    autohide: true,
    language: 'zh-TW'
  });
}
"use strict";

var course = new Swiper(".course-swiper", {
  slidesPerView: 8,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  }
});
var swiper = new Swiper(".swiper", {
  slidesPerView: 6
});
var avatar = new Swiper(".recommend-avatar", {
  loop: true,
  effect: "fade"
});
var recommendText = new Swiper(".recommend-text", {
  loop: true,
  effect: "fade",
  grabCursor: true
});
var recommendImg = new Swiper(".recommend-img", {
  loop: true,
  effect: "fade",
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
  pagination: {
    el: ".recommend-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  },
  controller: {
    control: [recommendText, avatar],
    by: "container"
  }
});
recommendText.controller.control = [recommendImg];
//# sourceMappingURL=all.js.map

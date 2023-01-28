var swiper = new Swiper(".auct-swiper", {
  // loop: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // modules: [Navigator],
  // autoHeight: true,
  // speed: 500,
  // slidesPerView: 3,

  slidesPerView: "auto",
  spaceBetween: 42,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  // freeMode: true,
  grabCursor: true,
});

var swiper2 = new Swiper("#popular-swiper", {
  slidesPerView: "auto",
  spaceBetween: 36,
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".popular__button-next",
    prevEl: ".popular__button-prev",
  },
});
// swiper2.slideNext();

var swiper3 = new Swiper(".categories__swiper", {
  slidesPerView: "auto",
  spaceBetween: 42,
  grabCursor: true,
  freeMode: true,
});
console.log(2)
console.log(3)
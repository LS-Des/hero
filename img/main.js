new Swiper('.news .swiper', {
  autoplay: true,
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.news .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.news .swiper-button-prev',
    nextEl: '.news .swiper-button-next'
  }
})
import store from '../src/storeDB.js'

new Swiper('#event .swiper', {
  autoplay: true, 
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '#event .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '#event .swiper-button-prev',
    nextEl: '#event .swiper-button-next'
  }
})

new Swiper('.park .swiper', {
  // autoplay: true, 
  loop: true,
  effect : 'fade',
  speed: 500,
  slidesPerView: 1,
  pagination: {
    el: '.park .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.park .swiper-button-prev',
    nextEl: '.park .swiper-button-next'
  }
})

new Swiper('.sports .swiper', {
  // autoplay: true, 
  loop: true,
  effect : 'fade',
  speed: 500,
  slidesPerView: 1,
  pagination: {
    el: '.sports .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.sports .swiper-button-prev',
    nextEl: '.sports .swiper-button-next'
  }
})

new Swiper('.zoo .swiper', {
  // autoplay: true, 
  loop: true,
  effect : 'fade',
  speed: 500,
  slidesPerView: 1,
  pagination: {
    el: '.zoo .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.zoo .swiper-button-prev',
    nextEl: '.zoo .swiper-button-next'
  }
})

new Swiper('#info .swiper', {
  // autoplay: true, 
  loop: true,
  slidesPerView: 1.3,
  slidesPerGroup: 1,
  spaceBetween: 45,
  pagination: {
    el: '#info .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '#info .swiper-button-prev',
    nextEl: '#info .swiper-button-next'
  }
})

new Swiper('#subVisual04 .swiper', {
  // autoplay: true, 
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '#subVisual04 .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '#subVisual04 .swiper-button-prev',
    nextEl: '#subVisual04 .swiper-button-next'
  }
})

const itemsEl = document.querySelector('#info .swiper-wrapper')
store.forEach(function(store){
  const itemEl = document.createElement('div')
  itemEl.classList.add('swiper-slide')
  itemEl.innerHTML = /* html */ `
    <div class="swiper-slide">
      <div class="tit-wrap">
        <div class="tit-mask diamond"><span class="tit">경주 2호점</span></div>
      </div>
      <div class="info">
          <ul class="txt-wrap">
            <li class="name ex-bold">${store.name}</li>
            <li>
              <span class="bold">매장주소</span>
              <span>${store.add}</span>
            </li>
            <li>
              <span class="bold">전화번호</span>
              <span>${store.tel}</span>
            </li>
            <li>
              <span class="bold">영업시간</span>
              <span>${store.time}</span>
            </li>
          </ul>
          <div class="button-wrap">
            <button class="btn btn--blue">지도</button>
            <button class="btn">유선문의</button>
          </div>
      </div>
    </div>
  `

  itemsEl.append(itemEl)
})

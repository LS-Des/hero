import store from '../src/storeDB.js'

// 슬라이드-이벤트
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

// 슬라이드-컨텐츠
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

// 슬라이드-매장
new Swiper('#info .swiper', {
  loop: true,
  // slidesPerView: "auto",
  slidesPerView: 1.2,
  // slidesPerGroup: 1.5,
  spaceBetween: 10,
  pagination: {
    el: '#info .swiper-pagination',
    clickable: true
  }
})

// 슬라이드-테마이미지
new Swiper('#subVisual03 .swiper', {
  // autoplay: true, 
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '#subVisual03 .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '#subVisual03 .swiper-button-prev',
    nextEl: '#subVisual03 .swiper-button-next'
  }
})

// 토글-faq
$('#faq .btn').on('click', function(){
  let active = $(this).hasClass('active');
  let answer = $(this).parent().next('.answer');

  if(!active){
    $(this).addClass('active');
    answer.addClass('active');
    answer.slideDown(300);
  } else {
    $(this).removeClass('active');
    answer.removeClass('active');
    answer.slideUp(300);
  }
})

  // 플레이테마 박스 클릭 시 모달 등장
  $("#subVisual03 .mo1").on('click', function(){
    $(".wrap_modal").addClass('active');
    $("html").addClass('scroll_lock');
  });

  // 모달 닫기
  $(".bg_modal, .wrap_modal .btn_close button").on('click', function(){
    $(".wrap_modal").removeClass('active');
    $("html").removeClass('scroll_lock');
  })

// data연동
// const itemsEl = document.querySelector('#info .swiper-wrapper')
// store.forEach(function(store){
//   const itemEl = document.createElement('div')
//   itemEl.classList.add('swiper-slide')
//   itemEl.innerHTML = /* html */ `
//     <div class="tit-wrap">
//       <div class="tit-mask diamond"><img src="${store.thumbnail}" alt="${store.name}" class="tit"></div>
//     </div>
//     <div class="info">
//         <ul class="txt-wrap">
//           <li class="name ex-bold">${store.name}</li>
//           <li>
//             <span class="bold">매장주소</span>
//             <span>${store.add}</span>
//           </li>
//           <li>
//             <span class="bold">전화번호</span>
//             <span>${store.tel}</span>
//           </li>
//           <li>
//             <span class="bold">영업시간</span>
//             <span>${store.time}</span>
//           </li>
//         </ul>
//         <div class="button-wrap">
//           <button class="btn btn--blue">지도</button>
//           <button class="btn">유선문의</button>
//         </div>
//     </div>
//   `

//   itemsEl.append(itemEl)
// })

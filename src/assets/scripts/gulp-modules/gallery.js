import Swiper from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import { gsap, ScrollTrigger } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';
import { useState } from '../modules/helpers/helpers';
import { getGalleryList } from '../modules/gallery/getGallerySlider';

initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger);
const $container = document.querySelector('[data-gallery-slider]');
const gallerySlider = new Swiper($container, {
  modules: [Navigation],
  speed: 1000,

  autoplay: 1000,
  spaceBetween: 50,
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
    // when window width is >= 480px
    768: {
      spaceBetween: 16,
    },
    1366: {
      spaceBetween: 50,
      slidesPerView: 1.5,
    },
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
const filterBtnArray = document.querySelectorAll('[data-gallery-id]');

const [pending, setPending, usePendingEffect] = useState(false);

usePendingEffect(val => {
  if (val) {
    document.querySelector('.swiper-gallery').classList.add('pending');
  } else {
    document.querySelector('.swiper-gallery').classList.remove('pending');
  }
});

// const gallerySlider = new Swiper($container, {
//   // loop: true,
//   preloadImages: false,
//   watchSlidesVisibility: true,
//   prevNext: 2,
//   slidesPerView: 'auto',
//   lazy: {
//     enabled: true,
//     loadPrevNext: true,
//     loadPrevNextAmount: 2,
//     loadOnTransitionStart: false,
//     threshold: 50,
//   },
//   // navigation: {
//   //     nextEl: $container.querySelector('[class*="-next"'),
//   //     prevEl: $container.querySelector('[class*="-prev"')
//   // }
// });

const [gallerySliderState, setGallerySlider, useGallerySliderEffect] = useState({
  // title: '',
  gallery: [],
  sliders: {},
});

useGallerySliderEffect(state => {
  setPending(true);
  $container.querySelector('.swiper-wrapper').innerHTML = state.gallery
    .map(
      el => `
        <div class="swiper-slide" style="background-image: url(${el})">
        <img src="${el}" class="swiper-lazy" loading="lazy">
        </div>
        `,
    )
    .join('');

  gallerySlider.update();

  setTimeout(() => {
    setPending(false);
  }, 500);
});

// const [galleryList, setgalleryList, useGalleryListEffect] = useState([]);

getGalleryList().then(res => {
  setGallerySlider({
    ...gallerySliderState(),
    sliders: { ...res.data },
  });

  const data = res.data[1];
  // if (data && document.documentElement.classList.contains('mobile')) {
  //   setGallerySlider({
  //     // title: 'AAAAA',
  //     gallery: [...data.gallery.map(el => (el.img_mob ? el.img_mob : el.img))],
  //     // miniFlatImage: data.img,
  //     // type: data.type,
  //     // type_gallery: data.type_gallery,
  //   });
  //   return;
  // }
  if (data) {
    setGallerySlider({
      gallery: [...data],
      sliders: { ...res.data },
    });
  }

  {

    /*Зміна стану якщо в URL є дані про галерею яку треба відкрити спочатку. В посиланні на сторінку галареї можна вказати gallery_id=[номер галереї] */
    let params = new URLSearchParams(document.location.search);
    let galleryId = params.get("gallery_id"); 
  
    // if (galleryId ) 
    if (galleryId && gallerySliderState().sliders[galleryId]) {
      document.querySelector(`[data-gallery-id="${galleryId}"]`).click();
    }
  }
});

document.querySelector('body').addEventListener('click', function(evt) {
  const target = evt.target.closest('[data-gallery-id]');
  if (!target) return;
  const id = target.dataset.galleryId;
  filterBtnArray.forEach(btn => btn.classList.remove('active'));
  target.classList.add('active');
  gallerySlider.slideTo(0);

  const data = gallerySliderState().sliders[id];
  // if (data && document.documentElement.classList.contains('mobile')) {
  //   setGallerySlider({
  //     title: 'AAAAA',
  //     gallery: [...data],
  //     // miniFlatImage: data.img,
  //     // type: data.type,
  //     // type_gallery: data.type_gallery,
  //   });
  //   return;
  // }

  if (data) {
    setGallerySlider({
      ...gallerySliderState(),
      gallery: [...data],
    });
  }
});

import Swiper, { Autoplay, EffectFade } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { gsap, ScrollTrigger, CustomEase } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';
import '../modules/helpers/imgParallax';

initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger, CustomEase);

const swiperProgress = new Swiper('.swiper-progress', {
  modules: [Navigation],
  speed: 1000,
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    1366: {
      spaceBetween: 50,
      slidesPerView: 2.2,
    },
  },
  spaceBetween: 50,
  slidesPerView: 2.2,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

const swiperProgressDetails = new Swiper(' .swiper-progress-details', {
  modules: [Navigation],
  speed: 1000,
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    1366: {
      spaceBetween: 50,
      slidesPerView: 1.5,
    },
  },
  spaceBetween: 50,
  slidesPerView: 2.2,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

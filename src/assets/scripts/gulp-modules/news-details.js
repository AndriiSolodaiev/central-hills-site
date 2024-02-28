import Swiper, { Autoplay, EffectFade } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { gsap, ScrollTrigger, CustomEase } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';
import '../modules/helpers/imgParallax';

initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger, CustomEase);

const swiperProgress = new Swiper('.swiper-news', {
  modules: [Navigation],
  speed: 1000,
  breakpoints: {
    // when window width is >= 320px
    360: {
      
      spaceBetween: 8,
    },
    // when window width is >= 480px
    768: {
      
      spaceBetween: 16,
    },
    1366: {
      spaceBetween: 50,
      
    },
  },
  spaceBetween: 50,
  
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
      
      spaceBetween: 8,
    },
    // when window width is >= 480px
    768: {
      
      spaceBetween: 16,
    },
    1366: {
      spaceBetween: 50,
     
    },
  },
  spaceBetween: 50,
 
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
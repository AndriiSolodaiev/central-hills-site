import Swiper, { Autoplay, EffectFade } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { gsap, ScrollTrigger, CustomEase } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';
import '../modules/helpers/imgParallax';

initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger, CustomEase);

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  speed: 1000,

  autoplay: 1000,
  spaceBetween: 50,
  slidesPerView: 1.9,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

const swiperProgress = new Swiper('.swiper-progress', {
  modules: [Navigation],
  speed: 1000,

  spaceBetween: 50,
  slidesPerView: 2.2,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
const swiperLuxary = new Swiper('.swiper-luxary', {
  modules: [Navigation, EffectFade, Autoplay],
  speed: 2000,
  effect: 'fade',
  autoplay: {
    delay: 1500,
  },
  spaceBetween: 50,

  // navigation: {
  //   prevEl: '.swiper-button-prev',
  //   nextEl: '.swiper-button-next',
  // },
});

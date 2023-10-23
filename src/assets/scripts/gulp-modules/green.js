import Swiper, { Autoplay, EffectFade } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { gsap, ScrollTrigger, CustomEase } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';
import '../modules/helpers/imgParallax';

initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger, CustomEase);

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
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
  speed: 1000,
  effect: 'fade',

  autoplay: {
    delay: 2500,
  },
  spaceBetween: 50,
  on: {
    activeIndexChange: function() {
      gsap
        .timeline()
        .from('.bg-img__title', {
          delay: 0.7,
          yPercent: -100,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          '.bg-img__text',
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
          },
          '<',
        );
    },
  },
  // navigation: {
  //   prevEl: '.swiper-button-prev',
  //   nextEl: '.swiper-button-next',
  // },
});

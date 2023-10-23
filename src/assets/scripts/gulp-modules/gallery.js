import Swiper from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import { gsap, ScrollTrigger } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';

initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger);

const swiper = new Swiper('.swiper-gallery', {
  modules: [Navigation],
  speed: 1000,

  autoplay: 1000,
  spaceBetween: 50,
  slidesPerView: 1.2,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
const filterBtnArray = document.querySelectorAll('[data-gallery-fltr-btn]');

document.body.addEventListener('click', evt => {
  const filterBtn = evt.target.closest('[data-gallery-fltr-btn]');
  if (filterBtn) {
    filterBtnArray.forEach(btn => btn.classList.remove('active'));
    filterBtn.classList.add('active');
    // filterBtn.dataset.galleryFltrBtn;
  }
});

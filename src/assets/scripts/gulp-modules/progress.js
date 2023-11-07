import 'swiper/css';
import { gsap, ScrollTrigger } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';
import { progressCard } from '../modules/progress/progressCard';
import { getProgressList } from '../modules/progress/getProgress';
import { useState } from '../modules/helpers/helpers';
initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger);

const [progress, setProgressList, useProgressEffect] = useState({
  pending: false,
  container: document.querySelector('.progress__container'),
  data: [],
});

useProgressEffect(({ data, container }) => {
  container.insertAdjacentHTML('beforeend', data.map(el => progressCard(el)).join(''));
});
// useProgressEffect(({ pending, container, type }) => {
//   gsap.to(container, {
//     autoAlpha: pending ? 0.5 : 1,
//   });

//   pending ? container.classList.add('loading') : container.classList.remove('loading');
// });

getProgressList().then(res => {
  setProgressList({
    ...progress(),
    data: res.data,
  });
});

const loadMoreBtn = document.querySelector('[data-load-more]');
loadMoreBtn.addEventListener('click', () => {
  getProgressList().then(res => {
    setProgressList({
      ...progress(),
      data: res.data,
    });
  });
});

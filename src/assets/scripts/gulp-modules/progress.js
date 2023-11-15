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
  count: 1,
  cardsCount: null,
});
const loadMoreBtn = document.querySelector('[data-load-more]');

useProgressEffect(({ data, container }) => {
  container.insertAdjacentHTML('beforeend', data.map(el => progressCard(el)).join(''));
  console.log(progress().data.length);
  if (progress().count - 1 === Math.ceil(progress().cardsCount / 2)) {
    loadMoreBtn.disabled = true;
  }
});
// useProgressEffect(({ pending, container, type }) => {
//   gsap.to(container, {
//     autoAlpha: pending ? 0.5 : 1,
//   });

//   pending ? container.classList.add('loading') : container.classList.remove('loading');
// });

getProgressList(progress().count).then(res => {
  setProgressList({
    ...progress(),
    count: progress().count + 1,
    data: res.data.data,
    cardsCount: res.data.count,
  });
});

loadMoreBtn.addEventListener('click', () => {
  getProgressList(progress().count).then(res => {
    if (res.data.data) {
      setProgressList({
        ...progress(),
        count: progress().count + 1,
        data: res.data.data,
      });
    }
  });
});

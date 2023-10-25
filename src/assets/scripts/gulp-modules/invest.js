import 'swiper/css';
import { gsap, ScrollTrigger } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';
import '../modules/helpers/imgParallax';
import c3 from 'c3';
import 'c3/c3.css';
initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger);

const chart = c3.generate({
  bindto: '#chart',
  data: {
    x: 'x',
    y: 'y',

    columns: [
      ['x', '2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01'],
      ['profit', 0, 1000, 2550, 2550, 4000, 5500],
    ],
    types: {
      profit: 'area-spline',
    },
  },
  legend: {
    show: false,
  },
  padding: {
    left: 100,
    right: 50,
  },
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: function(x) {
          return x.getFullYear();
        },

        // values: ['2013-01-05', '2013-01-10'],
      },
    },
    y: {
      tick: {
        format: function(d) {
          return '$' + d + '/m2';
        },
        values: ['1000', '2000', '3000', '4000', '5000', '6000'],
      },
    },
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.leader__descr-wrap',
      start: 'top 80%',
      end: '+=0',
    },
  })
  .add(() => {
    const digits = document.querySelectorAll('.invest__leader [data-count]');
    digits.forEach(digitForAnim => {
      const isDigitInteger = Number.isInteger(+digitForAnim.dataset.count);
      gsap.fromTo(
        digitForAnim,
        {
          textContent: 0,
        },
        {
          textContent: (e, target) => {
            console.log(target.textContent);
            return target.dataset.count;
          },
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: isDigitInteger ? 1 : 0.1 },
          stagger: 0,
        },
      );
    });
  });

import 'swiper/css';
import { gsap, ScrollTrigger } from 'gsap/all';
import { initSmoothScrolling } from '../modules/scroll/leniscroll';
import googleMap from '../modules/map/map';

googleMap();
initSmoothScrolling();
gsap.registerPlugin(ScrollTrigger);

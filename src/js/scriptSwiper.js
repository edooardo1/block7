import Swiper from 'swiper';
import '!style-loader!css-loader!swiper/swiper-bundle.css';
const slider1 = new Swiper('.slider1', {
  pagination: {
    el: '.slider1-pagination',
    clickable: true,
  },
});

const slider2 = new Swiper('.slider2', {
  pagination: {
    el: '.slider2-pagination',
    clickable: true,
  },
});

const slider3 = new Swiper('.slider3', {
  pagination: {
    el: '.slider3-pagination',
    clickable: true,
  },
});
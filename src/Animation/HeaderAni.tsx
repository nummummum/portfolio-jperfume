import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function HeaderAni() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.menuline', 0.2, {
    scrollTrigger: {
      trigger: '.main_about_h3',
      scrub: true,
    },
    backgroundColor: '#333',
  });
  gsap.to('.header_logo', 0.2, {
    scrollTrigger: {
      trigger: '.main_about_h3',
      scrub: true,
    },
    color: '#333',
  });
  gsap.to('.menu', 0.2, {
    scrollTrigger: {
      trigger: '.main_about_h3',
      scrub: true,
    },
    color: '#333',
  });
}

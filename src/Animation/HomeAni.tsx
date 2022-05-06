import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function HomeAni() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.page_loading', 0, {
    ease: 'ease',
    opacity: 0,
    delay: 0.5,
    visibility: 'hidden',
  });
  gsap.to('.main_about_img', 1.5, {
    scrollTrigger: '.main_about_h3',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.main_about_content', 1.52, {
    scrollTrigger: '.main_about_p',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.slide_img1', 1.5, {
    scrollTrigger: '.slide_img4',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.slide_img2', 1.5, {
    scrollTrigger: '.natural_perfume',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.slide_img3', 1.5, {
    scrollTrigger: '.slide_img1',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.slide_img4', 1.5, {
    scrollTrigger: '.slide_img2',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.natural_perfume', 1.5, {
    scrollTrigger: '.natural_li',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.rest_perfume', 1.5, {
    scrollTrigger: '.rest_perfume',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.rest_perfume2', 1.5, {
    scrollTrigger: '.rest_perfume2',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
}

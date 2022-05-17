import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function AboutAni() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.introduce', 0.2, {
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
  gsap.to('.introduce2', 0.2, {
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0px)',
  });
}

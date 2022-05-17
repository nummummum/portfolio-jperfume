import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function HeaderAni() {
  gsap.registerPlugin(ScrollTrigger);

  // .main_cover를 트리거로 main_cover의 80% 지점에서 작동시작한다.
  // 두번째 top은 scrollstart를 의미한다.
  gsap.fromTo(
    '.menuline',
    { backgroundColor: '#fff' },
    {
      scrollTrigger: {
        trigger: '.main_cover',
        start: '80% top',
        scrub: true,
      },
      backgroundColor: '#333',
    }
  );

  gsap.fromTo(
    '.header_logo',
    { color: '#fff', opacity: 0, visibility: 'hidden' },
    {
      scrollTrigger: {
        trigger: '.main_cover',
        start: '80% top',
        scrub: true,
      },
      color: '#333',
      opacity: 1,
      visibility: 'visible',
    }
  );
  gsap.fromTo(
    '.menu',
    { color: '#fff' },
    {
      scrollTrigger: {
        trigger: '.main_cover',
        start: '80% top',
        scrub: true,
      },
      color: '#333',
    }
  );
}

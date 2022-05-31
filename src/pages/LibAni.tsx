import HeaderContainer from '../containers/HeaderContainer';
import LibAnimation from '../Animation/LibAni';
import './MainPage.scss';
import '../common.scss';
import { useEffect } from 'react';
export default function LibAni() {
  useEffect(() => {
    LibAnimation();
  }, []);
  return (
    <>
      <HeaderContainer />
      <section className="main_content">
        <img className="shape1" src="/images/shape1.jpg" alt="" />
        <img className="shape2" src="/images/shape2.png" alt="" />
        <div className="inner">
          <h1>Second Step</h1>
          <h2>사용된 라이브러리 - 애니메이션</h2>
          <div className="introduce">
            <img src="/images/gsap.png" alt="" />
            <p>
              scss 하나만으로 여러 애니메이션을 구현할 수 있지만
              <br />
              gsap라이브러리를 사용하여 스크롤에 반응하는 동적 <br />
              애니메이션을 구성하였다. 헤더 애니메이션과 page에
              <br /> 해당하는 애니메이션을 구현하여 페이지에 따라 다른
              <br />
              애니메이션이 스크롤에 따라 작동하도록 하였다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

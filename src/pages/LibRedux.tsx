import LibAni from '../Animation/LibAni';
import HeaderContainer from '../containers/HeaderContainer';
import './MainPage.scss';
import '../common.scss';
import { useEffect } from 'react';
export default function LibRedux() {
  useEffect(() => {
    LibAni();
  }, []);
  return (
    <>
      <HeaderContainer />
      <section className="main_content">
        <img className="shape1" src="/images/shape1.jpg" alt="" />
        <img className="shape2" src="/images/shape2.png" alt="" />
        <div className="inner">
          <h1>Second Step</h1>
          <h2>사용된 라이브러리 - 리덕스</h2>
          <div className="introduce">
            <img src="/images/redux.png" alt="" />
            <p>
              JPerfume 프로젝트에서 리덕스가 사용된 부분은
              <br /> 메뉴의 상태 하나이다. 로그인 토큰이나 유지되어야
              <br /> 할 변수가 존재하지 않는 프로젝트이므로 메뉴의 <br />
              상태만 바꿔주도록 설계하였다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

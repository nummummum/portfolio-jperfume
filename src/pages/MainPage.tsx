import HeaderContainer from '../containers/HeaderContainer';
import './MainPage.scss';
import '../common.scss';
import { useEffect } from 'react';
import MainPageAni from '../Animation/MainPageAni';
export default function MainPage() {
  useEffect(() => {
    MainPageAni();
  }, []);
  return (
    <>
      <HeaderContainer />
      <section className="main_content">
        <img className="shape1" src="/images/shape1.jpg" alt="" />
        <img className="shape2" src="/images/shape2.png" alt="" />
        <div className="inner">
          <h1>First Step</h1>
          <h2>홈페이지 설명</h2>
          <div className="introduce">
            <img src="/images/main_about.jpeg" alt="" />
            <p>
              JPerfume 사이트는 참고한 웹사이트와 비슷하게 <br />
              메인화면과 메뉴에 나오는 몇 가지 다른 페이지로 <br />
              구성되어있습니다. 메인화면에서 각각의 항목들로 <br />
              이동할 수 있게 설정하였고 상단에 메뉴탭이 <br />
              버튼형식으로 구현되어있어 버튼 클릭시 메뉴를 <br />볼 수 있는
              구조입니다. 디테일한 구현내용은 <br />
              “서브 - 타입스크립트와 리액트” 와 Second Step의 <br />
              “사용된 라이브러리” 탭에서 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

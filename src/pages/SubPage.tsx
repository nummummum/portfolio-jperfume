import HeaderContainer from '../containers/HeaderContainer';
import './MainPage.scss';
import '../common.scss';
import { useEffect } from 'react';
import SubPageAni from '../Animation/SubPageAni';
export default function SubPage() {
  useEffect(() => {
    SubPageAni();
  }, []);
  return (
    <>
      <HeaderContainer />
      <section className="main_content">
        <img className="shape1" src="/images/shape1.jpg" alt="" />
        <img className="shape2" src="/images/shape2.png" alt="" />
        <div className="inner">
          <h1>First Step</h1>
          <h2>타입스크립트와 리액트</h2>
          <div className="introduce">
            <img src="/images/main_about.jpeg" alt="" />
            <p>
              J프로젝트는 기본적으로 타입스크립트와 scss,
              <br /> 리액트 3가지로 구성되어있습니다. 타입 스크립트와 <br />
              리액트의 장점을 활용하여 배너와 헤더같이 반복되어
              <br /> 나오는 구성을 재활용하고 타입스크립트로 타입을
              <br /> 명시하여 useRef, useState, Redux 등에 적용하였습니다.
              <br />
              리액트의 useState, useRef, useEffect를 사용하여 동적인
              <br /> 상태변화와 애니메이션 적용, 버튼 토글 제어기 등을
              <br /> 만들었으며 라이브러리로 gsap, redux, redux-action을
              <br />
              사용하였습니다. gsap으로 애니메이션효과를 주고 <br />
              redux와 redux-action으로 메뉴의 활성화 상태를
              <br /> 관리하게 하였습니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

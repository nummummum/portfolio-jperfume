import HeaderContainer from '../containers/HeaderContainer';
import './About.scss';
import '../common.scss';
import AboutAni from '../Animation/AboutAni';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    AboutAni();
  }, []);
  return (
    <>
      <HeaderContainer />
      <section className="about_content">
        <img className="shape1" src="/images/shape1.jpg" alt="" />
        <img className="shape2" src="/images/shape2.png" alt="" />
        <div className="inner">
          <h1>JPerfume</h1>
          <h2>About J-Project </h2>
          <div className="introduce">
            <img src="/images/main_about.jpeg" alt="" />
            <div className="content_wrap">
              <h4>프로젝트에 대하여</h4>
              <p>
                저는 웹쪽으로 방향성을 정하여 평소에 트렌디한
                <br />
                웹사이트들을 참고하면서 트렌드에 대한 지식을 넓히고 있습니다.
                <br />
                트렌드에 대해 공부하면서 일본 웹사이트의 트렌디함에 대하여
                <br />
                높게 평가하였고 그 정수를 흡수하기 위해 일본의
                <br />
                트렌디한 웹을 카피하는 프로젝트를 시작하였습니다.
                <br />
                이것을 J-프로젝트라고 이름을 지었고
                <br />
                그 첫 번 째 프로젝트 이름이 JPerfume입니다.
                <br />
              </p>
            </div>
          </div>
          <div className="introduce2">
            <img src="/images/about_img1.jpg" alt="" />
            <div className="content_wrap">
              <p>
                JPerfume 프로젝트는 일본의 트렌디한 웹사이트들을 <br />
                보여주는 http://bm.straightline.jp/ 에서 <br />
                https://relaxing-okinawa.jp/ 을 기반으로 만들었습니다.
                <br /> 해당 웹사이트는 아로마와 카운셀링, 수업에 대하여 <br />
                소개가 되었고 저는 작업내용과 복기의 목적으로 <br />
                프로젝트에 대한 설명으로 대체하였습니다. <br />
                기본적인 구성이나 애니메이션 재생방식 등은
                <br /> 틀에 맞췄고 자세한 소스, 내용들만 재구성하였습니다.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

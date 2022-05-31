import LibAni from '../Animation/LibAni';
import HeaderContainer from '../containers/HeaderContainer';
import './MainPage.scss';
import '../common.scss';
import './Lib.scss';
import { useEffect } from 'react';
export default function LibEtc() {
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
          <h2>반응형 웹</h2>
          <div className="introduce">
            <img src="/images/ResponsibleWeb.png" alt="" />
            <p>
              트렌디한 웹 뿐 만 아니라 현존하고 활동하는 웹들은 <br />
              모두 핸드폰, 아이패드, 데스크탑 등 다양한 플랫폼에서
              <br /> 호환이 가능하게 만들었다. JPerfume도 반응형 웹으로
              <br /> 만들어 다른 환경에서는 다른 화면으로 보이게 설정을
              <br /> 하였다. 메인화면 및 메뉴, 각 항목별로 반응형웹을
              적용시켰다.
            </p>
          </div>
          <h4 className="respon_title1">반응형 웹 - 메뉴</h4>
          <div className="respon_menu">
            <img src="/images/responMenu1.png" alt="" />
            <img src="/images/responMenu2.png" alt="" />
          </div>
          <h4 className="respon_title2">반응형 웹 - 메인화면</h4>
          <div className="respon_main">
            <img src="/images/responMain1.png" alt="" />
            <img src="/images/responMain2.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

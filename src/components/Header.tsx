import './Header.scss';
import '../common.scss';
import { useEffect, useRef, useState } from 'react';
import store from '../redux/create';

interface ChangeProps {
  add: (reqData: boolean) => void;
}

export default function Header({ add }: ChangeProps) {
  const [menuState, setMenu] = useState<string>('menu_toggle');
  const [menuColor, setColor] = useState<string | null>(null);
  let result: boolean | null;
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    menuRef.current!.style.visibility = 'hidden';
    menuRef.current!.style.opacity = '0';
    document.body.style.overflow = 'auto';
  }, []);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      result = store.getState().openMenu.state;
      switch (result) {
        case true: {
          console.log(result);
          menuRef.current!.style.visibility = 'visible';
          menuRef.current!.style.opacity = '1';
          document.body.style.overflow = 'hidden';
          break;
        }
        case false: {
          console.log(result);
          menuRef.current!.style.visibility = 'hidden';
          menuRef.current!.style.opacity = '0';
          document.body.style.overflow = 'auto';
          break;
        }
      }
      return () => {
        unsubscribe();
      };
    });
  }, [add]);
  return (
    <>
      <header>
        <div className="header">
          <a className="header_logo" href="/">
            JPerfume
          </a>
          <div className={menuState} onClick={click}>
            <span className="menuline" />
            <span className="menuline" />
            <span className="menuline" />
            <span className="menu">Menu</span>
          </div>
        </div>
      </header>
      <div className="openmenu" ref={menuRef}>
        <div className="omenu_left">
          <a href="/">
            <span>relaxing</span>
          </a>
        </div>
        <div className="omenu_right">
          <ul className="omenu_right_wrap">
            <li className="About">
              <a href="/about">
                <h4>About</h4>
              </a>
            </li>
            <li className="Menu">
              <h4>Menu</h4>
              <div className="Menu_first">
                <a href="/mainpage">
                  <h5>First Step</h5>
                </a>
                <a href="/mainpage">
                  <span>메인 - 홈페이지 설명</span>
                </a>
                <a href="/subpage">
                  <span>서브 - 타입스크립트와 리액트</span>
                </a>
              </div>
              <div className="Menu_second">
                <a href="/libredux">
                  <h5>Second Step</h5>
                </a>
                <a href="/libredux">
                  <span>사용된 라이브러리 - 리덕스</span>
                </a>
                <a href="/libani">
                  <span>사용된 라이브러리 - 애니메이션 효과</span>
                </a>
                <a href="/libetc">
                  <span>반응형 웹</span>
                </a>
              </div>
            </li>
            <li className="Etc">
              <a href="/etc">
                <h4>Etc</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  function click() {
    if (menuState === 'menu_toggle') {
      setMenu('menu_toggle clicked');
      add(true);
    } else if (menuState === 'menu_toggle clicked') {
      setMenu('menu_toggle');
      add(false);
    }
    console.log(menuState);
  }
}

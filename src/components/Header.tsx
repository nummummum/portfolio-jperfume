import './Header.scss';
import '../common.scss';
import { useEffect, useState } from 'react';
import HeaderAni from '../Animation/HeaderAni';
export default function Header() {
  const [menuState, setMenu] = useState<string>('menu_toggle');
  useEffect(() => {
    HeaderAni();
  }, []);
  return (
    <header>
      <div className="header">
        <a className="header_logo">JPerfume</a>
        <div className={menuState} onClick={click}>
          <span className="menuline" />
          <span className="menuline" />
          <span className="menuline" />
          <span className="menu">Menu</span>
        </div>
      </div>
    </header>
  );

  function click() {
    if (menuState === 'menu_toggle') {
      setMenu('menu_toggle clicked');
    } else if (menuState === 'menu_toggle clicked') {
      setMenu('menu_toggle');
    }
    console.log(menuState);
  }
}

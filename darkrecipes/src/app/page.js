'use client';

import Header from '../app/components/Header';
import '../app/globals.css';


export default function Home() {

  return (
    <div className="body">
      <Header onNavClick={handleNavClick} />
      <div className="content-wrapper">
        <main>
          <h4>제작중</h4>
        </main>
      </div>
      <footer>
        [ 건의&문의&커피 : <a href="https://open.kakao.com/o/gCsNT4Wg"><i className="fa-solid fa-carrot"></i></a> ] &nbsp;&nbsp;&nbsp;  [ 제작: 사탕주면따라가요 ]
      </footer>
    </div>
  );
}

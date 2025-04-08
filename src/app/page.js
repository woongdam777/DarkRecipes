'use client';

import { useState } from 'react';
import Header from '../app/components/Header';
import SectionHome from './components/Section/SectionHome';
import SectionInfo from './components/Section/SectionInfo';
import '../app/globals.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('section-info');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="body">
      <Header onNavClick={handleNavClick} />
      <div className="content-wrapper">
        <main>
          <h4>제작중</h4>
          {activeSection === 'section-info' && <SectionInfo />}
        </main>
      </div>
      <footer>
        [ 건의&문의&커피 : <a href="https://open.kakao.com/o/gCsNT4Wg"><i className="fa-solid fa-carrot"></i></a> ] &nbsp;&nbsp;&nbsp;  [ 제작: 사탕주면따라가요 ]
      </footer>
    </div>
  );
}

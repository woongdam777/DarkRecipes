'use client';

import { useState, useEffect } from 'react';
import styles from '../style/Header.module.css';

export default function Header({ onNavClick }) {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setColorMode(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleDarkMode = () => {
    const newMode = colorMode === 'dark' ? 'light' : 'dark';
    setColorMode(newMode);
    localStorage.setItem('theme', newMode);
    document.body.setAttribute('data-theme', newMode);
  };

  const toggleColorMode = () => {
    const colorModes = ['light', 'brown', 'blue', 'green', 'yellow','neutral','earthy'];
    const currentIndex = colorModes.indexOf(colorMode);
    
    const nextIndex = (currentIndex + 1) % colorModes.length;
    const newColorMode = colorModes[nextIndex];

    setColorMode(newColorMode);
    localStorage.setItem('theme', newColorMode);
    document.body.setAttribute('data-theme', newColorMode);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle} onClick={() => onNavClick('section-home')}>
            <div className={styles.gradientText}>
              <span>D.R.</span>
              <span>[Dark Recipes]</span>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.darkBtn} onClick={toggleDarkMode}>
              {colorMode === 'dark' ? (<i className="fa-solid fa-sun"></i>) : (<i className="fa-solid fa-moon"></i>)}
            </div>
            <div className={styles.colorBtn} onClick={toggleColorMode}>
              {(() => {
                switch(colorMode) {
                  case 'light':
                    return <i className="fa-solid fa-palette"></i>;
                  case 'brown':
                    return <i className="fa-solid fa-tree"></i>;
                  case 'blue':
                    return <i className="fa-solid fa-water"></i>;
                  case 'green':
                    return <i className="fa-solid fa-leaf"></i>;
                  case 'yellow':
                    return <i className="fa-solid fa-bolt"></i>;
                  case 'neutral':
                    return <i className="fa-solid fa-star-of-life"></i>;
                  case 'earthy':
                    return <i className="fa-solid fa-clover"></i>;
                  default:
                    return <i className="fa-solid fa-palette"></i>;
                }
              })()}
            </div>
          </div>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li onClick={() => onNavClick('section-home')}>
              <i className="fa-solid fa-house"></i><span>홈</span>
            </li>
            {/* <li onClick={() => onNavClick('section-calc')}>
              <i className="fa-solid fa-calculator"></i><span>계산기</span>
            </li> */}
            <li onClick={() => onNavClick('section-info')}>
              <i className="fa-solid fa-circle-info"></i><span>정보</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
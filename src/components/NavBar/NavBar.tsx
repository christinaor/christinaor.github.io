import { useState } from 'react';

import homeIcon from '../../assets/navbar/home-svgrepo-com.svg';
import resumeDownloadIcon from '../../assets/navbar/download-svgrepo-com.svg'; 

import styles from './styles.module.scss'

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav id="nav-bar" className={`${styles.navBar} ${isScrolled ? styles.isScrolled : ''}`}>
      <a className={styles.homeIcon} href="#home">
        <img src={homeIcon} alt="home icon linked to top of page" />
      </a>

      <ol className={styles.rightNav}>
        <li className={styles.homeText}>
          <a href="#home">
            <span>Home</span>
          </a>
        </li>
        <li className="header-about">
          <a href="#about">
            <span> About</span>
          </a>
        </li>
        <li className="header-tech-stack">
          <a href="/#tech-stack">
            <span> Tech</span>
          </a>
        </li>
        <li className="header-experience">
          <a href="/#experiences">
            <span> Experience</span>
          </a>
        </li>
        <li className="header-contact">
          <a href="/#contact-me">
            <span> Contact</span>
          </a>
        </li>
        {/* <li className="header-resume">
          <a className="resume-button" href="https://drive.google.com/file/d/1SA0kACwemgMkuZib9PY484WxvG1t9HzJ/view" target="_blank">
            <img src={resumeDownloadIcon} alt="download resume icon" />
          </a>
        </li> */}
      </ol>
    </nav>
  )
};
import { useState } from 'react';

import styles from './styles.module.scss'

function NavBar() {
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
      <ul>
        <li className="header-home">
          <a href="/#hero">
            Home
          </a>
        </li>
          <li className="header-about">
            <a href="/#about">
              About
            </a>
          </li>
          <li className="header-experience">
            <a href="/#experiences">
              Experience
            </a>
          </li>
          <li className="header-contact">
            <a href="/#contact-me">
              Contact
            </a>
          </li>
          <li className="header-resume">
            <a className="resume-button" href="https://drive.google.com/file/d/1SA0kACwemgMkuZib9PY484WxvG1t9HzJ/view" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar;

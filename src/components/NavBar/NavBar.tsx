import { useState } from 'react';
import styles from './styles.module.scss'

function NavBar() {
  return (
    <nav id="nav-bar" className={`${styles.navBar}`}>
        <ul>
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
            <a href="/#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="header-resume">
          <a className="resume-button" href="/resume.pdf">Resume</a>
        </div>
      </nav>
  )
}

export default NavBar;

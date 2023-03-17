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
            <a href="/#contact-me">
              Contact
            </a>
          </li>
        </ul>
        <div className="header-resume">
          <a className="resume-button" href="https://drive.google.com/file/d/1SA0kACwemgMkuZib9PY484WxvG1t9HzJ/view" target="_blank">Resume</a>
        </div>
      </nav>
  )
}

export default NavBar;

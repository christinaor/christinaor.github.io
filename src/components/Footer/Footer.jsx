import aboutIcon from '../../assets/jump-to-icons/about.svg'
import contactIcon from '../../assets/jump-to-icons/contact.svg'
import experienceIcon from '../../assets/jump-to-icons/experience.svg'
import homeIcon from '../../assets/jump-to-icons/home.svg'
import techStackIcon from '../../assets/jump-to-icons/tech-stack.svg'

import emailIcon from '../../assets/social-media-logos/email-svgrepo-com.svg'
import githubIcon from '../../assets/social-media-logos/github-svgrepo-com.svg'
import instagramIcon from '../../assets/social-media-logos/instagram-svgrepo-com.svg'
import linkedinIcon from '../../assets/social-media-logos/linkedin-svgrepo-com.svg'

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer id="about" className={styles.footer}>
      <div>
        <h3 className={styles.footerTitle}>Reach out to me!</h3>
        <div className={`${styles.contactLinks}`}>
          <ul>
            <li>
              <a className="linkedin" href="https://www.linkedin.com/in/christina-or">
                <img src={linkedinIcon} className="linkedin-logo" alt="LinkedIn logo" />
              </a>
            </li>
            <li>
              <a className="github" href="https://www.github.com/christinaor">
                <img src={githubIcon} className="github-logo" alt="GitHub logo" />
              </a>
            </li>
            <li>
              <a className="instagram" href="https://www.instagram.com/christinahahaaa">
                <img src={instagramIcon} className="instagram-logo" alt="Instagram logo" />
              </a>
            </li>
            <li>
              <a id="contact" className="email" href={"mailto:".concat(atob("b3IuY2hyaXN0aW5hMjdAZ21haWwuY29t"))} rel="noopener noreferrer">
                <img src={emailIcon} className="email" alt="email logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.jumpToLinks}>
        <h3>Jump To</h3>
        <ul>
          <li>
            <img src={homeIcon} className="home-icon" alt="home icon linking to home section logo" />
            <a href="#home" >Home</a>
          </li>
          <li>
            <img src={aboutIcon} className="about-icon" alt="about icon linking to about section" />
            <a href="#about">About Me</a>
          </li>
          <li>
            <img src={techStackIcon} className="tech-stack-icon" alt="tech stack icon linking to tech stack section" />
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li>
            <img src={experienceIcon} className="experience-icon" alt="experience icon linking to experience section" />
            <a href="#experiences">Experience</a>
          </li>
          <li>
            <img src={contactIcon} className="contact-icon" alt="contact icon linking to contact section" />
            <a href="contact-me">Contact</a>
          </li>
        </ul>
      </div>

      {/* <div className={styles.footerText}> */}
        <div className={styles.footerText}>Built && Designed: Christina Or</div>
        {/* <a href="#home"><div>Jump to Top</div></a> */}
      {/* </div> */}
    </footer>
  )
};
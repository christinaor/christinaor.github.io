import emailIcon from '../../assets/social-media-logos/email-svgrepo-com.svg'
import githubIcon from '../../assets/social-media-logos/github-svgrepo-com.svg'
import instagramIcon from '../../assets/social-media-logos/instagram-svgrepo-com.svg'
import linkedinIcon from '../../assets/social-media-logos/linkedin-svgrepo-com.svg'

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer id="about" className={styles.footer}>
      <h3 className={styles.footerTitle}>Reach out to me</h3>

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

      <div className={styles.footerText}>
        <div >Built && Designed: Christina Or</div>
        <a href="#hero"><div>Jump to Top</div></a>
      </div>
    </footer>
  )
};
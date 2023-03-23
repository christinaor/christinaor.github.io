import gmailIcon from '../../assets/social-media-logos/gmail-svgrepo-com.svg'
import githubIcon from '../../assets/social-media-logos/github-logo-svgrepo-com.svg'
import instagramIcon from '../../assets/social-media-logos/instagram-1-svgrepo-com.svg'
import linkedinIcon from '../../assets/social-media-logos/linkedin-svgrepo-com.svg'

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer id="about" className={styles.footer}>
      <h2 className={styles.footerTitle}>Find me on social media!</h2>

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
            <a id="contact" className="gmail" href={"mailto:".concat(atob("b3IuY2hyaXN0aW5hMjdAZ21haWwuY29t"))} rel="noopener noreferrer">
              <img src={gmailIcon} className="gmail-logo" alt="Gmail logo" />
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
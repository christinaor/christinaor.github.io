import gmailIcon from '../../assets/social-media-logos/gmail-svgrepo-com.svg'
import githubIcon from '../../assets/social-media-logos/github-svgrepo-com.svg'
import instagramIcon from '../../assets/social-media-logos/instagram-1-svgrepo-com.svg'
import linkedinIcon from '../../assets/social-media-logos/linkedin-svgrepo-com.svg'
import styles from './styles.module.scss'

function Contact() {
  return (
    <section id="contact-me" className={`${styles.contactMe}`}>
      <h2 className={`${styles.header}`}>Get in Touch</h2>
      <p className={`${styles.contactBlurb}`}>I'm currently exploring new opportunities. Feel free to reach out to collaborate, chat about tech, or if you just want to say hi!</p>

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
    </section>
  )
}

export default Contact;

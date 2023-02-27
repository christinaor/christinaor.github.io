import { useState } from 'react';
import githubIcon from '../../assets/github-svgrepo-com.svg'
import instagramIcon from '../../assets/instagram-1-svgrepo-com.svg'
import linkedinIcon from '../../assets/linkedin-svgrepo-com.svg'
import styles from './styles.module.scss'

function Contact() {
  // const [count, setCount] = useState(0)

  return (
    <section id="contact" className={`${styles.contact}`}>
      <h3 className={`${styles.header}`}>Get in Touch</h3>
      <div>
        <p>I'm currently exploring new opportunities. Feel free to reach out to collaborate, chat about tech, or if you just want to say hi!</p>

        <div className={`${styles.contactInfo}`}>
          <div className={`${styles.socials}`}>
            <p>Find me on social media:</p>
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
            </ul>
          </div>

          <div className={`${styles.email}`}>
            <p>Or send me an email:</p>
            <button><a className="email-link" href="mailto:or.christina27@gmail.com" rel="noopener noreferrer">Say Hello</a></button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact;

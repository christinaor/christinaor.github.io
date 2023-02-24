import { useState } from 'react';
import styles from './styles.module.scss'

function Contact() {
  // const [count, setCount] = useState(0)

  return (
    <section id="contact" className={`${styles.contact}`}>
      <h3>Get in Touch</h3>
      <div>
        <p>I'm currently exploring new opportunities! Feel free to reach out to me if you'd like to collaborate or want to chat.</p>
        <p>Reach out to me via social media:</p>
        <ul>
          <li>
            <a className="linkedin" href="https://www.linkedin.com/in/christina-or">LinkedIn</a>
          </li>
          <li>
            <a className="github" href="https://www.github.com/christinaor">GitHub</a>
          </li>
          <li>
            <a className="instagram" href="https://www.instagram.com/christinahahaaa">Instagram</a>
          </li>
        </ul>
        <p>Or send me an email:</p>
        <a className="email-link" href="mailto:or.christina27@gmail.com" rel="noopener noreferrer">Say Hello</a>
      </div>
    </section>
  )
}

export default Contact;

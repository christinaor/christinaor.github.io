import EmailForm from '../EmailForm/EmailForm';

import styles from './styles.module.scss'

export default function Contact() {
  return (
    <section id="contact-me" className={`${styles.contactMe}`}>
      <h2 className={`${styles.header}`}><span className='section-number'>4. </span>Get in Touch</h2>
      <p className={`${styles.contactBlurb}`}>I'm currently exploring new opportunities. Reach out to collaborate, chat about tech, or just to say hi!</p>

      <EmailForm />
    </section>
  )
};
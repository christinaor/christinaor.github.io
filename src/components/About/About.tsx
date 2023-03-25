import TechStack from '../TechStack/TechStack';
import styles from './styles.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
        <h2 className={`${styles.header}`}>About Me</h2>
        <div className={styles.description}>
          <p> In more recent years, I've found a love for automation and building full-scale web applications.</p>
          <ul>
            <li>At <a className={styles.blurbLink} href="https://www.nielsen.com" target="_blank" rel="noopener noreferrer">Nielsen</a>, I enjoyed writing Python scripts for recurring projects and sharing my technical knowledge to help colleagues upskill and boost the automation initiative.</li>
            <li>My last role at an early stage startup called <a className={styles.blurbLink} href="https://www.skematic.com" target="_blank" rel="noopener noreferrer">Skematic</a> involved writing business logic to solve complex issues and building out features across the application in the niche world of compliance tech.</li>
            <li>I'm currently volunteering for a civic-tech organization called <a className={styles.blurbLink} href="https://www.hackforla.org/" target="_blank" rel="noopener noreferrer">Hack for LA</a>, where I help build products with other developers to alleviate issues in the LA region.</li>
            <li>Some of my interests involve dragon boat racing, board game nights, traveling to learn about different cultures and food, and being a dog mom!</li>
          </ul>  
        </div>
    </section>
  )
};
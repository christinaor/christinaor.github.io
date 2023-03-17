import TechStack from '../TechStack/TechStack';
import styles from './styles.module.scss';

function About() {
  return (
    <section id="about" className={styles.about}>
      {/* <div className={styles.blurb}> */}
        <h2 className={`${styles.header}`}>About Me</h2>
        <div className={styles.description}>
          <p> In more recent years, I've found a love for automation and building full-scale web applications. Most recently, my work at <a className={styles.blurbLink} href="https://www.skematic.com" target="_blank" rel="noopener noreferrer">Skematic</a> involved writing business logic to solve complex issues and building out features across the application in the niche world of compliance tech. I'm currently volunteering for a civic-tech organization called <a className={styles.blurbLink} href="https://www.hackforla.org/" target="_blank" rel="noopener noreferrer">Hack for LA</a>, where I help build products with other developers to alleviate issues in the LA region.</p>
        </div>
      {/* </div> */}
      <TechStack />
    </section>
  )
}

export default About;
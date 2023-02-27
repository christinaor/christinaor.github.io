import TechStack from '../TechStack/TechStack';
import styles from './styles.module.scss';

function About() {
  return (
    <section id="about" className={`${styles.about}`}>
      <h3 className={`${styles.header}`}>About Me</h3>
      <div className={`${styles.blurb}`}>
        <p>My name is Christina and I love building out ideas that save precious time and contributing to efforts promoting general goodwill. My earliest memories of web development span back to tinkering with HTML and CSS on Neopets, and in more recent years, I've found a love for automation.</p>
        <p>The variety of experiences I've had in multiple industries have all helped me realize my affinity towards web and software development. Most recently, my work at <a href="https://www.skematic.com" target="_blank" rel="noopener noreferrer">Skematic</a> involved writing business logic to solve complex issues and building out features across the application in the niche world of compliance tech. I'm currently volunteering for a civic-tech organization called <a href="https://www.hackforla.org/" target="_blank" rel="noopener noreferrer">Hack for LA</a>, where I help build products with other developers to alleviate issues in the LA region.</p>
      </div>
      <TechStack />
    </section>
  )
}

export default About;
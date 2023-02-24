import TechStack from '../TechStack/TechStack';
import styles from './styles.module.scss';

function About() {
  return (
    <section id="about" className={`${styles.about}`}>
      <h3 className={`${styles.header}`}>About Me</h3>
      <div>
        <p>My name is Christina and I love building out ideas that save precious time and contributing to efforts promoting general goodwill. My earliest memories of web development span back to tinkering with HTML and CSS on Neopets, and in more recent years, I've found a love for automation.</p>
        <p>I'm grateful for the variety of experiences I've had in the health, shipping, and media industries, all of which helped me realize my affinity towards web and software development. Most recently, my work at <a href="https://www.skematic.com" target="_blank" rel="noopener noreferrer">Skematic</a> involved writing business logic to solve complex issues and building out features across the application in the niche world of compliance tech.</p>
        <TechStack />
      </div>
    </section>
  )
}

export default About;
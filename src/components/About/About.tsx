import styles from './styles.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
        <h2 className={`${styles.header}`}><span className='section-number'>1. </span>About Me</h2>
        <div className={styles.description}>
          <p>My earliest memories of coding involved decking out a Neopets page and recreating the Meerca Chase game with .NET. The next foray into coding stemmed from the desire to heighten productivity. I then self-taught Python and realized I loved solving challenging puzzles and constantly learning. This passion snowballed into picking up new technologies and honing my skills in full-stack engineering, eventually making the leap into the software engineering industry.</p>
          <p>Through the culmination of my experiences, I discovered an affinity towards automation and building full-scale web applications. Here are pieces of my journey and a bit more about me:</p>
          <ul>
            <li>As a Senior Research Analyst at <a className={styles.blurbLink} href="https://www.nielsen.com" target="_blank" rel="noopener noreferrer">Nielsen</a>, I enjoyed writing Python scripts for recurring projects and sharing my technical knowledge to help colleagues upskill and boost the automation initiative.</li>
            <li>My last role as Software Engineer at an early stage startup called <a className={styles.blurbLink} href="https://www.skematic.com" target="_blank" rel="noopener noreferrer">Skematic</a> involved writing business logic to solve complex issues and building out features across the application in the niche world of compliance tech.</li>
            <li>I'm currently volunteering as a Developer for a civic-tech organization called <a className={styles.blurbLink} href="https://www.hackforla.org/" target="_blank" rel="noopener noreferrer">Hack for LA</a>, where I help build products with other developers to alleviate issues in the LA region.</li>
            <li>Some of my interests involve dragon boat racing, board game nights, traveling to learn about different cultures and food, and being a dog mom! &#128021;</li>
          </ul>  
        </div>
    </section>
  )
};
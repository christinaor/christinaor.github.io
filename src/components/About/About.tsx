import styles from './styles.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
        <h2 className={`${styles.header}`}>
          <span className='section-number'>1. </span>
          About Me</h2>
        <div className={styles.description}>
          <p>My earliest memories of coding started with a Neopets page and recreating Meerca Chase with .NET. My next foray stemmed from the desire to heighten productivity in Excel. This snowballed into a journey of self-taught Python and finding my love of solving challenging puzzles and constant learning.</p>
          <p>Eventually, I leapt from my past life as a data analyst into the world of software engineering. Through the culmination of my experiences, I discovered an affinity towards automation and building full-scale web applications. Here are pieces of my journey:</p>
          <ul>
            <li>As a Senior Research Analyst at <a className={styles.blurbLink} href="https://www.nielsen.com" target="_blank" rel="noopener noreferrer">Nielsen</a>, my bread and butter was writing Python scripts for recurring projects and sharing my technical knowledge to help colleagues upskill and boost the automation initiative.</li>
            <li>My previous role as Software Engineer at an early stage startup called <a className={styles.blurbLink} href="https://www.skematic.com" target="_blank" rel="noopener noreferrer">Skematic</a> involved writing business logic to solve complex issues and building out features across the application in the niche world of compliance tech.</li>
            <li>Currently, I'm volunteering as a Developer for a civic-tech organization called <a className={styles.blurbLink} href="https://www.hackforla.org/" target="_blank" rel="noopener noreferrer">Hack for LA</a>, where I help build products with other developers to alleviate issues in the LA region.</li>
            <li>In my spare time, I paddle in dragon boats, play in social board game nights, traveling to learn about different cultures and food, and am a dog mom to a Spitz! &#128021;</li>
          </ul>  
        </div>
    </section>
  )
};
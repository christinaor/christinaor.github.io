import { motion } from 'framer-motion';

import analyticsAutomationIcon from '../../assets/about/analytics-automation.svg';
import gearsIcon from '../../assets/about/gears.svg';
import volunteerIcon from '../../assets/about/volunteer.svg';
import funFactIcon from '../../assets/about/fun-fact.svg';

import styles from './styles.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={`${styles.header}`}>
        <span className='section-number'>1. </span>
        <span>About Me</span>
      </h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className={styles.description}>
          <div className={styles.summary}>
            <p>My earliest memories of coding started with a Neopets page and recreating Meerca Chase with .NET. My next foray stemmed from the desire to heighten productivity in Excel. This snowballed into a journey of self-taught Python and finding my love of solving challenging puzzles and constant learning.</p>
            <p>Eventually, I leapt from my past life as a data analyst into the world of software engineering. Through the culmination of my experiences, I discovered an affinity towards automation and building full-scale web applications. Here are pieces of my journey:</p>
          </div>
          <ul>
            <li>
              <img src={analyticsAutomationIcon} alt="analytics and automation icon" />
              <p>As a Senior Research Analyst at <a className={styles.blurbLink} href="https://www.nielsen.com" target="_blank" rel="noopener noreferrer">Nielsen</a>, my joy was writing Python scripts for recurring projects and sharing my technical knowledge to help colleagues upskill and boost the automation initiative.</p>
            </li>
            <li>
              <img src={gearsIcon} alt="gears icon" />
              <p>I was a Software Engineer at an early stage startup called <a className={styles.blurbLink} href="https://www.skematic.com" target="_blank" rel="noopener noreferrer">Skematic</a>, where I wrote business logic to solve complex issues and built out features across the compliance management platform.</p>
            </li>
            <li>
              <img src={volunteerIcon} alt="volunteering icon" />
              <p>Currently, I'm volunteering as a Developer for a civic-tech organization called <a className={styles.blurbLink} href="https://www.hackforla.org/" target="_blank" rel="noopener noreferrer">Hack for LA</a>, where I help build products with other developers to alleviate issues in the LA region.</p>
            </li>
            <li>
              <img src={funFactIcon} alt="fun fact icon of sleeping dog" />
              <p>In my spare time, I paddle in dragon boats, play in social board game nights, travel to learn about different cultures and food, and am a dog mom to a Spitz! &#128021;</p>
            </li>
          </ul>  
        </div>
      </motion.div>
    </section>
  )
};
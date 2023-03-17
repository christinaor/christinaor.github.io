import { useState } from 'react'
import styles from './styles.module.scss'

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>
        <div className={styles.smallHeroText}>Hi, my name is</div>
        <div className={styles.bigHeroText}>Christina Or.</div>
        <div className={`${styles.subText}`}>Software Engineer && Web Developer.</div>
      </h1>
      {/* <h1 className={`${styles.bigHeroText}`}></h1>
      <h1 className={`${styles.subText}`}></h1> */}

      <p>I love building out ideas that save precious time and contributing to efforts promoting general goodwill.</p>
      {/* <div className={`${styles.sameLineText}`}>
        <h2 className={`${styles.bigHeroText}`}>Christina Or.</h2>
        <h1 className={`${styles.smallHeroText}`}>and I'm a</h1>
      </div>
      <h2 className={`${styles.subText}`}>I am a Software Engineer && Web Developer.</h2> */}
      {/* <h2 className={`${styles.subText}`}>Software Engineer</h2> */}
      {/* <h2 className={`${styles.subText}`}>&& Web Developer.</h2> */}
    </section>
  )
}

export default Hero

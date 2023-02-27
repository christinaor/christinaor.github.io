import { useState } from 'react'
import styles from './styles.module.scss'

function Hero() {
  return (
    <section id="hero" className={`${styles.hero}`}>
      <h1 className={`${styles.smallHeroText}`}>Hey there, I'm</h1>
      <div className={`${styles.sameLineText}`}>
        <h2 className={`${styles.bigHeroText}`}>Christina Or</h2>
        <h1 className={`${styles.smallHeroText}`}>and I'm a</h1>
      </div>
      <h2 className={`${styles.subText}`}>Software Engineer && Web Developer.</h2>
    </section>
  )
}

export default Hero

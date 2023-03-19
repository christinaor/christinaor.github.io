import styles from './styles.module.scss'

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>
        <div className={styles.smallHeroText}>Hi there, I am</div>
        <div className={styles.bigHeroText}>Christina Or.</div>
        <div className={`${styles.subText}`}>Software Engineer && Web Developer.</div>
      </h1>

      <p className={styles.heroBlurb}>I love building out ideas that save precious time and contributing to efforts promoting general goodwill.</p>
    </section>
  )
}

export default Hero

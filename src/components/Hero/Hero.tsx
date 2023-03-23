import styles from './styles.module.scss'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>
        <div className={styles.smallHeroText}>Hi there, I am</div>
        <div className={styles.bigHeroText}>Christina Or.</div>
        <div className={`${styles.subText}`}>Full Stack Software Engineer.</div>
      </h1>

      <p className={styles.heroBlurb}>I build ideas for <span className={styles.emphasize}>productivity</span> and love to contribute to efforts promoting <span className={styles.emphasize}>general goodwill</span>.</p>

      <a className="resume-button" href="https://drive.google.com/file/d/1SA0kACwemgMkuZib9PY484WxvG1t9HzJ/view" target="_blank">
        <span>Find My Resume Here!</span>
      </a>
    </section>
  )
};

import styles from './styles.module.scss'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <h1>
        <div className={styles.smallHeroText}>Hi there, I am</div>
        <div className={styles.bigHeroText}>Christina Or.</div>
        {/* <div className={`${styles.subText}`}>Full Stack Software Engineer.</div> */}
        <div className={`${styles.subText}`}>I build for ease and goodwill.</div>
      </h1>

      <p className={styles.heroBlurb}>I'm a full-stack software engineer who loves solving complex issues with code and building products to increase productivity.</p>
      {/* <p className={styles.heroBlurb}>I build for <span className={styles.emphasize}>productivity</span> and to promote general <span className={styles.emphasize}>goodwill</span>.</p> */}

      <button>
        <a className="resume-button" href="https://drive.google.com/file/d/1SA0kACwemgMkuZib9PY484WxvG1t9HzJ/view" target="_blank">Peek my resume!</a>
      </button>

      {/* <button>
        <a className="resume-button" href="https://drive.google.com/file/d/1SA0kACwemgMkuZib9PY484WxvG1t9HzJ/view" target="_blank">Find My Resume Here!</a>
      </button> */}
    </section>
  )
};

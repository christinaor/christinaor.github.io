import downloadResumeIcon from '../../assets/download-resume-arrow.svg';

import styles from './styles.module.scss'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <h1>
        <div className={styles.smallHeroText}>Hi there, I am</div>
        <div className={styles.bigHeroText}>Christina Or.</div>
        <div className={`${styles.subText}`}>I build for ease and goodwill.</div>
      </h1>

      <p className={styles.heroBlurb}>I'm a full-stack software engineer who loves solving complex issues with code and building products to increase productivity.</p>

      <button>
        <a className="resume-button" href="https://drive.google.com/file/d/1SA0kACwemgMkuZib9PY484WxvG1t9HzJ/view" target="_blank">Peek my resume!</a>
        <img src={downloadResumeIcon} alt="download resume icon" />
      </button>
    </section>
  )
};

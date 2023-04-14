import React, { useEffect, useState } from 'react';

import aboutIcon from '../../assets/jump-to-icons/about.svg'
import contactIcon from '../../assets/jump-to-icons/contact.svg'
import experienceIcon from '../../assets/jump-to-icons/experience.svg'
import homeIcon from '../../assets/jump-to-icons/home.svg'
import techStackIcon from '../../assets/jump-to-icons/tech-stack.svg'

import emailIcon from '../../assets/social-media-logos/email-svgrepo-com.svg'
import githubIcon from '../../assets/social-media-logos/github-svgrepo-com.svg'
import instagramIcon from '../../assets/social-media-logos/instagram-svgrepo-com.svg'
import linkedinIcon from '../../assets/social-media-logos/linkedin-svgrepo-com.svg'

import styles from './styles.module.scss';

export default function Footer() {
  // const axios = require("axios");

  // const options = {
  //   method: 'GET',
  //   url: 'https://numbersapi.p.rapidapi.com/6/21/date',
  //   params: {fragment: 'true', json: 'true'},
  //   headers: {
  //     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
  //     'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  const [quoteList, setQuoteList] = useState()

  useEffect(() => {
    fetch("https://zenquotes.io/api/quotes", {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response => {
      console.log(response)
      return response.json()
    }).then((data) => setQuoteList(data))
  }, [])
  console.log(quoteList)

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.links}>
        <div>
          <h3 className={styles.footerTitle}>Reach out to me</h3>
          <ul className={`${styles.contactLinks}`}>
            <li>
              <a className="linkedin" href="https://www.linkedin.com/in/christina-or">
                <img src={linkedinIcon} className="linkedin-logo" alt="LinkedIn logo" />
                <div>LinkedIn</div>
              </a>
            </li>
            <li>
              <a className="github" href="https://www.github.com/christinaor">
                <img src={githubIcon} className="github-logo" alt="GitHub logo" />
                <div>GitHub</div>
              </a>
            </li>
            <li>
              <a className="instagram" href="https://www.instagram.com/christinahahaaa">
                <img src={instagramIcon} className="instagram-logo" alt="Instagram logo" />
                <div>Instagram</div>
              </a>
            </li>
            <li>
              <a id="contact" className="email" href={"mailto:".concat(atob("bWVAY2hyaXN0aW5hb3IuY29t"))} rel="noopener noreferrer">
                <img src={emailIcon} className="email" alt="email logo" />
                <div>Email</div>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Jump To</h4>
          <ul className={styles.jumpToLinks}>
            <li>
              <a href="#home">
                <img src={homeIcon} className="home-icon" alt="home icon linking to home section logo" />
                <div>Home</div>
              </a>
            </li>
            <li>
              <a href="#about">
                <img src={aboutIcon} className="about-icon" alt="about icon linking to about section" />
                <div>About Me</div>
              </a>
            </li>
            <li>
              <a href="#tech-stack">
                <img src={techStackIcon} className="tech-stack-icon" alt="tech stack icon linking to tech stack section" />
                <div>Tech Stack</div>
              </a>
            </li>
            <li>
              <a href="#experiences">
                <img src={experienceIcon} className="experience-icon" alt="experience icon linking to experience section" />
                <div>Experience</div>
              </a>
            </li>
            <li>
              <a href="#contact-me">
                <img src={contactIcon} className="contact-icon" alt="contact icon linking to contact section" />
                <div>Contact</div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div>{quoteOfTheDay}</div> */}

      <div className={styles.footerText}>Built && Crafted: Christina Or.</div>
    </footer>
  )
};
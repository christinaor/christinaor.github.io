import { useState } from 'react';

import experiencesData from '../../../data/experiences';

import arrowIcon from '../../assets/arrow.svg';

import githubLinkLogo from '../../assets/experience-images/github-svgrepo-com.svg';
import websiteIcon from '../../assets/experience-images/external-link-svgrepo-com.svg';

import styles from './styles.module.scss';

export default function Experiences() {
  const [cardIndex, setCardIndex] = useState(0);

  const cardsArray = experiencesData?.map(experience => {
    return (
      <div className={styles.experience}>
        <div className={styles.titleAndLinks}>
          <a href={experience?.articleLink ? experience.articleLink : ''}><h3>{experience.title}</h3></a>

          <div className={styles.links} >
            <a href={experience?.githubLink}>
              <img src={githubLinkLogo} alt={experience.githubLinkImageAlt} />
            </a>
            <a href={experience?.websiteLink}>
              <img src={websiteIcon} alt={experience.websiteLinkImageAlt} />
            </a>
          </div>
        </div>

        <img className={styles.experienceImage} src={experience.image} alt={experience.imageAlt} />

        <p>{experience.description}</p>

        <ul className={styles.technologies}>
          {experience?.technologies?.map(technology => (
            <li className={styles.technology}>{technology}</li>
          ))}
        </ul>
      </div>
    )
  });

  const carouselDots = experiencesData.map((experience, index) => {
    return (
      <button className={`${styles.dot} ${index === cardIndex ? styles.activeDot : ""}`} onClick={() => setCardIndex(index)}></button>
    )
  });

  const handleLeftArrowClick = () => {
    console.log('left clicked')
    if (cardIndex - 1 >= 0) {
      setCardIndex(cardIndex - 1)
    } else {
      setCardIndex(cardsArray.length - 1)
    }
  };

  const handleRightArrowClick = () => {
    console.log('right clicked')
    if (cardIndex + 1 < cardsArray.length) {
      setCardIndex(cardIndex + 1)
    } else {
      setCardIndex(0)
    }
  }

  return (
    <section id="experiences" className={`${styles.experienceSection}`}>
      <h2 className={`${styles.header}`}>
        {/* <span className='section-number'>3. </span> */}
        Experience</h2>
      <div className={styles.experiences}>
        <img className={styles.leftArrow} src={arrowIcon} alt="left arrow icon for moving left in experience cards" onClick={handleLeftArrowClick}/>
        {cardsArray && cardsArray[cardIndex]}
        <img className={styles.rightArrow} src={arrowIcon} alt="left arrow icon for moving left in experience cards" onClick={handleRightArrowClick} />

        {/* {experiencesData?.map(experience => {
          return (
            <div className={styles.experience}>
              <div className={styles.titleAndLinks}>
                <a href={experience?.articleLink ? experience.articleLink : ''}><h3>{experience.title}</h3></a>

                <div className={styles.links} >
                  <a href={experience?.githubLink}>
                    <img src={githubLinkLogo} alt={experience.githubLinkImageAlt} />
                  </a>
                  <a href={experience?.websiteLink}>
                    <img src={websiteIcon} alt={experience.websiteLinkImageAlt} />
                  </a>
                </div>
              </div>

              <img className={styles.experienceImage} src={experience.image} alt={experience.imageAlt} />

              <p>{experience.description}</p>

              <ul className={styles.technologies}>
                {experience?.technologies?.map(technology => (
                  <li className={styles.technology}>{technology}</li>
                ))}
              </ul>
            </div>
          )
        })} */}

      </div>

      <div className={styles.dots}>
        {carouselDots}
      </div>
      
    </section>
  )
};

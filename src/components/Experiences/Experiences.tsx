import { useCallback, useRef, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import experiencesData from '../../../data/experiences';

import arrowIcon from '../../assets/arrow.svg';
import rewindeArrowIcon from '../../assets/rewind-arrow.svg';
import githubLinkLogo from '../../assets/experience-images/github-svgrepo-com.svg';
import websiteIcon from '../../assets/experience-images/external-link-svgrepo-com.svg';

import styles from './styles.module.scss';

export default function Experiences() {
  const [cardIndex, setCardIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const experiencesMaxScrollWidth = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollX = useRef(0);

  const carouselCards = experiencesData?.map(experience => {
    return (
      <div key={`${experience.title}-carousel-card`} className={styles.experienceContainer}>
        <div className={styles.experience}>
          <div className={styles.titleAndLinks}>
            {experience?.articleLink 

            ? <a href={experience?.articleLink ? experience.articleLink : ''}>
                <h3>{experience.title}</h3>
            </a>

            : <h3>{experience.title}</h3>
            }

            <div className={styles.links} >
              <a href={experience?.githubLink}>
                <img src={githubLinkLogo} alt={experience.githubLinkImageAlt} />
              </a>
              {experience?.websiteLink && <a href={experience.websiteLink}>
                <img src={websiteIcon} alt={experience.websiteLinkImageAlt} />
              </a>}
            </div>
          </div>

          <img className={styles.experienceImage} src={experience.image} alt={experience.imageAlt} />

          <p>{experience.description}</p>

          <ul className={styles.technologies}>
            {experience?.technologies?.map(technology => (
              <li key={`${technology}-name`} className={styles.technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  });

  const handleScroll = useCallback((e) => {
    e.preventDefault();
      if (!isScrolling) {
      setIsScrolling(true);
      if (e.target.scrollLeft > scrollX.current) {
        setCardIndex(cardIndex + 1)
      } else {
        setCardIndex(cardIndex - 1)
      }
    }
    scrollX.current = e.target.scrollLeft;
  }, [isScrolling, cardIndex]);

  useEffect(() => {
    if (isScrolling) {
      setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    }
  }, [isScrolling]);

  const handleLeftArrowClick = () => {
    if (cardIndex - 1 >= 0) {
      setCardIndex(cardIndex - 1)
    } else {
      setCardIndex(carouselCards.length - 1)
    }
  };

  const handleRightArrowClick = useCallback(() => {
    if (cardIndex + 1 < carouselCards.length) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0);
    }
  }, [cardIndex, carouselCards]);

  const handleRewindClick = () => {
    setCardIndex(0);
  };

  const handleFastForwardClick = () => {
    setCardIndex(experiencesData.length - 1);
  };

  const touchHandlers = useSwipeable({
    onSwipedRight: () => handleLeftArrowClick(),
    onSwipedLeft: () => handleRightArrowClick(),
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        if (cardIndex + 1 < carouselCards.length) {
          setCardIndex(cardIndex + 1);
        } else {
          setCardIndex(0);
        }
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <section id="experiences" className={`${styles.experienceSection}`}>
      <h2 className={`${styles.header}`}>
        <span className='section-number'>3. </span>
        Experience
      </h2>

      <div 
        {...touchHandlers}
        className={styles.experiencesOuter}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div 
          ref={experiencesMaxScrollWidth} 
          className={styles.experiencesInner} 
          style={{ transform: `translateX(-${cardIndex * 100}%)`}}
          onScroll={handleScroll}
        >
          {carouselCards}
          {/* {experiencesData?.map(experience => {
            return (
              <div key={`${experience.title}-carousel-card`} className={styles.experienceContainer}>
                <div className={styles.experience}>
                  <div className={styles.titleAndLinks}>
                    {experience?.articleLink 

                    ? <a href={experience?.articleLink ? experience.articleLink : ''}>
                        <h3>{experience.title}</h3>
                    </a>

                    : <h3>{experience.title}</h3>
                    }

                    <div className={styles.links} >
                      <a href={experience?.githubLink}>
                        <img src={githubLinkLogo} alt={experience.githubLinkImageAlt} />
                      </a>
                      {experience?.websiteLink && <a href={experience.websiteLink}>
                        <img src={websiteIcon} alt={experience.websiteLinkImageAlt} />
                      </a>}
                    </div>
                  </div>

                  <img className={styles.experienceImage} src={experience.image} alt={experience.imageAlt} />

                  <p>{experience.description}</p>

                  <ul className={styles.technologies}>
                    {experience?.technologies?.map(technology => (
                      <li key={`${technology}-name`} className={styles.technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })} */}
        </div>
      </div>

      <div className={styles.cardNavigation}>
        <img className={styles.rewindArrow} src={rewindeArrowIcon} alt="left rewind arrow icon for moving to the first experience card" onClick={handleRewindClick}/>
        <img className={styles.leftArrow} src={arrowIcon} alt="left arrow icon for moving left in experience cards" onClick={handleLeftArrowClick}/>

        <div className={styles.dots}>
          {experiencesData?.map((experience, index) => {
            return (
              <button 
                key={`${experience.title}-${index}-dot`} 
                className={`${styles.dot} ${index === cardIndex ? styles.activeDot : ""}`} 
                onClick={() => setCardIndex(index)}
              />
            )
          })}
        </div>
        
        <img className={styles.rightArrow} src={arrowIcon} alt="left arrow icon for moving left in experience cards" onClick={handleRightArrowClick} />
        <img className={styles.fastForwardArrow} src={rewindeArrowIcon} alt="right rewind arrow icon for moving to the last experience card" onClick={handleFastForwardClick}/>
      </div>
    </section>
  )
};

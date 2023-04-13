import { useCallback, useRef, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import experiencesData from '../../../data/experiences';

import arrowIcon from '../../assets/arrow.svg';
import githubLinkLogo from '../../assets/experience-images/github-svgrepo-com.svg';
import websiteIcon from '../../assets/experience-images/external-link-svgrepo-com.svg';

import styles from './styles.module.scss';

export default function Experiences() {
  const [cardIndex, setCardIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // const [carouselScroll, setCarouselScroll] = useState(0);
  const experiencesMaxScrollWidth = useRef(null);

  // useEffect(() => {
  //   // ref.scrollLeft gives start point of current scroll view
  //   // ref.scrollWidth gives total width of element
  //   console.log('width: ', (experiencesMaxScrollWidth.current ? `${experiencesMaxScrollWidth.current.scrollWidth}, ${experiencesMaxScrollWidth.current.scrollLeft}` : ""))
  // }, [experiencesMaxScrollWidth.current]);

  // const isScrolling = useRef(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollX = useRef(0);

  const carouselCards = experiencesData?.map(experience => {
    return (
      <div key={`${experience.title}-carousel-card`} className={styles.experienceContainer}>
        <div className={styles.experience}>
          <div className={styles.titleAndLinks}>
            <a href={experience?.articleLink ? experience.articleLink : ''}>
              <h3>{experience.title}</h3>
            </a>

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
              <li key={`${technology}-name`} className={styles.technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  });

  const handleScroll = useCallback((e) => {
    e.preventDefault();
    // console.log(scrollX.current, e.target.scrollLeft)

    // console.log(isScrolling.current)
    // if (!isScrolling.current) {
      console.log('in handleScroll', isScrolling)
      if (!isScrolling) {
      
      // Set isScrolling to true to stop repeat scrolling
      // isScrolling.current = true;
      setIsScrolling(true);

      if (e.target.scrollLeft > scrollX.current) {
        setCardIndex(cardIndex + 1)
        console.log('greater than current')
      } else {
        setCardIndex(cardIndex - 1)
        console.log('less than current')
      }
    }
    scrollX.current = e.target.scrollLeft;
  }, [isScrolling, cardIndex]);
  console.log('cardIndex:', cardIndex)
  console.log('scrollX: ', scrollX.current)

  useEffect(() => {
    // Throttle scrolling - reset after 0.3s
    console.log('in useEffect', isScrolling)
    // if (isScrolling.current) {
    if (isScrolling) {
      setTimeout(() => {
        // isScrolling.current = false;
        // console.log(isScrolling.current)
        setIsScrolling(false);
      }, 1500);
    }
  }, [isScrolling])
  console.log('outside', isScrolling)


  const handleLeftArrowClick = () => {
    console.log('left clicked')
    // console.log(experiencesMaxScrollWidth.current)
    if (cardIndex - 1 >= 0) {
      setCardIndex(cardIndex - 1)
    } else {
      setCardIndex(carouselCards.length - 1)
    }
  };

  const handleRightArrowClick = useCallback(() => {
    console.log('right clicked')
    // console.log((experiencesMaxScrollWidth.current.scrollWidth / carouselCards.length) * (cardIndex + 1) + 1)
    if (cardIndex + 1 < carouselCards.length) {
      setCardIndex(cardIndex + 1);
      // Need to set scroll to the start of scroll length for card at index
      // scrollX.current = (experiencesMaxScrollWidth.current.scrollWidth / carouselCards.length) * (cardIndex + 1) + 1;
    } else {
      setCardIndex(0);
      // scrollX.current = 0;
    }
  }, [cardIndex, carouselCards])

  const touchHandlers = useSwipeable({
    onSwipedRight: () => handleLeftArrowClick(),
    onSwipedLeft: () => handleRightArrowClick
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
          // style={{ transform: `translateX(-100%)`}} 
          // style={{ transform: `${carouselScroll}` }} 
          onScroll={handleScroll}
        >
          {carouselCards}
        </div>
      </div>

      <div className={styles.cardNavigation}>
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
      </div>
    </section>
  )
};

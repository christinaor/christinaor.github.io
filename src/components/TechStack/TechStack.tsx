import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

import technologies from '../../../data/technologies';
import technologyFilters from '../../../data/technology-filters';

import styles from './styles.module.scss'

export default function TechStack() {
  const [filters, setFilters] = useState(['all']);

  const handleFilterClick = useCallback((clickedButton) => {
    const clickedFilter = clickedButton.target.value;
    
    if (clickedFilter === 'all') {
      setFilters(['all'])
    } else if (filters.includes(clickedFilter)) {
      const remainingFilters = filters.filter(currentFilter => currentFilter !== clickedFilter);
      if (remainingFilters.length === 0) {
        setFilters(['all']);
      } else {
        setFilters(remainingFilters);
      }
    } else {
      const remainingFilters = filters.filter(currentFilter => currentFilter !== 'all')
      setFilters([...remainingFilters, clickedFilter]);
    }
  }, [filters, setFilters]);


  interface Tech {
    alt: string,
    icon: string,
    name: string,
    title: string,
    types: string[],
    website: string,
  };

  // need to include only techs with the same type as those in filters state
  const displayedTech = (filters.includes('all')) 
    ? technologies.map((tech: Tech) => {
      return (
        <li className={styles.techItem} key={tech.name}>
          <a className={styles.logoAndName} href={tech.website} target="_blank">
            <img src={tech.icon} className={styles.logo} alt={tech.alt} />
            <div className={styles.techName}>{tech.title}</div>
          </a>
        </li>
      )
    })
    : technologies
      .filter((tech: Tech) => tech.types.some((type: string) => filters.includes(type)))
      .map((tech: Tech) => {
        return (
          <li className={styles.techItem} key={tech.name} >
            <a className={styles.logoAndName} href={tech.website} target="_blank">
              <img src={tech.icon} className={styles.logo} alt={tech.alt} />
              <div className={styles.techName}>{tech.title}</div>
            </a>
          </li>
        )
      });

  const isActiveFilter = (filters, filterStr) => {
    let filterStyle = '';
    if (filters.includes(filterStr)) {
      filterStyle = `${styles.active} active`;
    } else {
      filterStyle = `${styles.inactive} inactive`;
    }
    return filterStyle;
  }

  return (
    <div id="tech-stack" className={styles.techSection}>
      <h2 className={styles.techHeader}>
        <span className='section-number'>2. </span>
        <span>Tech I've Worked With</span>
      </h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className={styles.buttonsAndTechList}>
          <div className={styles.filterButtonsWrapper}>
            {technologyFilters?.map(filter => {
              return (
                <button key={`tech-filter-${filter.name}`} className={isActiveFilter(filters, filter.name)} value={filter.name} onClick={handleFilterClick}>{filter.title}</button>
              )
            })}
          </div>

          <ul className={styles.techList}>
            {displayedTech}
          </ul>
        </div>
      </motion.div>
    </div>
  )
};
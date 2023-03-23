import { useCallback, useState } from 'react';

import technologies from '../../../data/technologies';

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
            <div>{tech.title}</div>
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
              <div>{tech.title}</div>
            </a>
          </li>
        )
      });

  const isActiveFilter = (filters, filterStr) => {
    let filterStyle = '';
    if (filters.includes(filterStr)) {
      filterStyle = 'active';
    } else {
      filterStyle = 'inactive';
    }
    return filterStyle;
  }

  return (
    <div id="tech-stack" className={styles.techSection}>
      <h3 className={styles.techHeader}>Some of my Tech Stack:</h3>
      <div className={styles.buttonsAndTechList}>
        <div className={styles.filterButtonsWrapper}>
          <button className={isActiveFilter(filters, 'all')} value='all' onClick={handleFilterClick}>All</button>
          <button className={isActiveFilter(filters, 'frontend')} value='frontend' onClick={handleFilterClick}>Frontend</button>
          <button className={isActiveFilter(filters, 'backend')} value='backend' onClick={handleFilterClick}>Backend</button>
          <button className={isActiveFilter(filters, 'other')} value='other' onClick={handleFilterClick}>Other</button>
        </div>
        <ul className={styles.techList}>
          {displayedTech}
        </ul>
      </div>
    </div>
  )
};
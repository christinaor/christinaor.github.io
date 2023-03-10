import { useCallback, useState } from 'react';

import technologies from '../../../data/technologies';

import styles from './styles.module.scss'

function TechStack() {
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
  }, [filters, setFilters])


  interface Tech {
    alt: string,
    icon: string,
    name: string,
    title: string,
    types: string[],
    website: string,
}

  // need to include only techs with the same type as those in filters state
  const displayedTech = (filters.includes('all')) 
    ? technologies.map((tech: Tech) => {
      return (
        <li key={tech.name} >
          <a href={tech.website} target="_blank">
            <img src={tech.icon} className={`${tech.name}-logo logo`} alt={tech.alt} />
            <div className={`${styles.techTitle}`}>{tech.title}</div>
          </a>
        </li>
      )
    })
    : technologies
      .filter((tech: Tech) => tech.types.some((type: string) => filters.includes(type)))
      .map((tech: Tech) => {
        return (
          <li key={tech.name} >
            <a href={tech.website} target="_blank">
              <img src={tech.icon} className={`${tech.name}-logo logo`} alt={tech.alt} />
              <div className={`${styles.techTitle}`}>{tech.title}</div>
            </a>
          </li>
        )
      })

  return (
    <div id="tech-stack" className={`${styles.techSection}`}>
      <h4 className={`${styles.techHeader}`}>Some technologies I've worked with:</h4>
      <div className={`${styles.filterButtons}`}>
        <div className={`${styles.filterTitle}`}>Filter By:</div>
        <button className={filters.includes('all') ? 'active' : 'inactive'} value='all' onClick={handleFilterClick}>All</button>
        <button className={filters.includes('frontend') ? 'active' : 'inactive'} value='frontend' onClick={handleFilterClick}>Frontend</button>
        <button className={filters.includes('backend') ? 'active' : 'inactive'} value='backend' onClick={handleFilterClick}>Backend</button>
        <button className={filters.includes('other') ? 'active' : 'inactive'} value='other' onClick={handleFilterClick}>Other</button>
      </div>
      <ul className={`${styles.techList}`}>
        {displayedTech}
      </ul>
    </div>
  )
}

export default TechStack;

import { useState } from 'react';

import technologies from '../../../data/technologies.tsx';

import styles from './styles.module.scss'

function TechStack() {
  let displayedTech = technologies.map(tech => {
    return (
      <li key={tech.name} >
        <a href={tech.website} target="_blank">
          <img src={tech.icon} className={`${tech.name}-logo logo`} alt={tech.alt} />
          <div>{tech.title}</div>
        </a>
      </li>
    )
  })

  return (
    <div id="tech-stack">
      <h4 className={`${styles.header}`}>Some technologies I've worked with:</h4>
      <ul>
        {displayedTech}
      </ul>
    </div>
  )
}

export default TechStack;

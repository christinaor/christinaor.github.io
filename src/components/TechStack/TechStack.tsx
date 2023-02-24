import { useState } from 'react';
import styles from './styles.module.scss'

function TechStack() {
  return (
    <div id="tech-stack">
      <h4 className={`${styles.header}`}>Technologies I've Worked With:</h4>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>MongoDB + Mongoose</li>
      </ul>
    </div>
  )
}

export default TechStack;

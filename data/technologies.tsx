import javascriptIcon from '../src/assets/javascript-svgrepo-com.svg'
import reactIcon from '../src/assets/react-svgrepo-com.svg'
import expressIcon from '../src/assets/express-svgrepo-com.svg'
import mongodbIcon from '../src/assets/mongodb-svgrepo-com.svg'
import nodeIcon from '../src/assets/node-js-svgrepo-com.svg'
import postgresqlIcon from '../src/assets/postgresql-svgrepo-com.svg'
import pythonIcon from '../src/assets/python-svgrepo-com.svg'
import typescriptIcon from '../src/assets/typescript-svgrepo-com.svg'

interface technologies {
  alt: string,
  icon: string,
  name: string,
  title: string,
  types: string[],
  website: string,
}[]

const technologies = [
  {
    alt: 'JavaScript logo',
    icon: javascriptIcon,
    name: 'javascript',
    title: 'JavaScript',
    types: ['frontend', 'backend', 'fullstack'],
    website: 'https://www.javascript.com/',
  },
  {
    alt: 'React logo',
    icon: reactIcon,
    name: 'react',
    title: 'React.js',
    types: ['frontend'],
    website: 'https://www.reactjs.com/',
  },
  {
    alt: 'Express logo',
    icon: expressIcon,
    name: 'express',
    title: 'Express.js',
    types: ['backend'],
    website: 'https://www.expressjs.com/',
  },
  {
    alt: 'MongoDB logo',
    icon: mongodbIcon,
    name: 'mongodb',
    title: 'MongoDB',
    types: ['backend'],
    website: 'https://www.mongodb.com/',
  },
  {
    alt: 'Node logo',
    icon: nodeIcon,
    name: 'node',
    title: 'Node.js',
    types: ['backend'],
    website: 'https://www.nodejs.org/',
  },
  {
    alt: 'PostgreSQL logo',
    icon: postgresqlIcon,
    name: 'postgresql',
    title: 'PostgreSQL',
    types: ['backend'],
    website: 'https://www.postgresql.org/',
  },
  {
    alt: 'Python logo',
    icon: pythonIcon,
    name: 'python',
    title: 'Python',
    types: ['backend'],
    website: 'https://www.python.org/',
  },
  {
    alt: 'TypeScript logo',
    icon: typescriptIcon,
    name: 'typescript',
    title: 'TypeScript',
    types: ['frontend', 'backend'],
    website: 'https://www.typescriptlang.org/',
  },
]

export default technologies;
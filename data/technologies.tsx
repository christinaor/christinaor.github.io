import css3Icon from '../src/assets/logos/css3-svgrepo-com.svg';
import dockerIcon from '../src/assets/logos/docker-svgrepo-com.svg';
import expressIcon from '../src/assets/logos/express-svgrepo-com.svg';
import gitIcon from '../src/assets/logos/git-svgrepo-com.svg';
import graphqlIcon from '../src/assets/logos/graphql-svgrepo-com.svg';
import hasuraIcon from '../src/assets/logos/hasura-svgrepo-com.svg';
import html5Icon from '../src/assets/logos/html-5-svgrepo-com.svg';
import javascriptIcon from '../src/assets/logos/javascript-svgrepo-com.svg';
import jestIcon from '../src/assets/logos/jest-snapshot-svgrepo-com.svg';
import jupyterNotebookIcon from '../src/assets/logos/jupyter-svgrepo-com.svg';
import mongodbIcon from '../src/assets/logos/mongodb-svgrepo-com.svg';
import nodeIcon from '../src/assets/logos/node-js-svgrepo-com.svg';
import postgresqlIcon from '../src/assets/logos/postgresql-svgrepo-com.svg';
import postmanIcon from '../src/assets/logos/postman-icon-svgrepo-com.svg';
import pythonIcon from '../src/assets/logos/python-svgrepo-com.svg';
import reactIcon from '../src/assets/logos/react-svgrepo-com.svg';
import sassIcon from '../src/assets/logos/scss2-svgrepo-com.svg';
import typescriptIcon from '../src/assets/logos/typescript-svgrepo-com.svg';
import webpackIcon from '../src/assets/logos/webpack-svgrepo-com.svg';

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
    alt: 'CSS logo',
    icon: css3Icon,
    name: 'css',
    title: 'CSS3',
    types: ['frontend'],
    website: 'https://www.w3.org/TR/CSS/#css',
  },
  {
    alt: 'Docker logo',
    icon: dockerIcon,
    name: 'docker',
    title: 'Docker',
    types: ['backend'],
    website: 'https://www.docker.com/',
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
    alt: 'Git logo',
    icon: gitIcon,
    name: 'git',
    title: 'Git',
    types: ['other'],
    website: 'https://git-scm.com/',
  },
  {
    alt: 'GraphQL logo',
    icon: graphqlIcon,
    name: 'graphql',
    title: 'GraphQL',
    types: ['frontend', 'backend'],
    website: 'https://graphql.org/',
  },
  {
    alt: 'Hasura logo',
    icon: hasuraIcon,
    name: 'hasura',
    title: 'Hasura',
    types: ['backend'],
    website: 'https://hasura.io/',
  },
  {
    alt: 'HTML logo',
    icon: html5Icon,
    name: 'html',
    title: 'HTML5',
    types: ['frontend'],
    website: 'https://html.spec.whatwg.org/',
  },
  {
    alt: 'JavaScript logo',
    icon: javascriptIcon,
    name: 'javascript',
    title: 'JavaScript',
    types: ['frontend', 'backend', 'fullstack'],
    website: 'https://www.javascript.com/',
  },
  {
    alt: 'Jest logo',
    icon: jestIcon,
    name: 'jest',
    title: 'Jest',
    types: ['frontend', 'backend', 'fullstack'],
    website: 'https://jestjs.io/',
  },
  {
    alt: 'Jupyter Notebook logo',
    icon: jupyterNotebookIcon,
    name: 'jupyterNotebook',
    title: 'Jupyter Notebook',
    types: ['other'],
    website: 'https://jupyter.org/',
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
    alt: 'Postman logo',
    icon: postmanIcon,
    name: 'postman',
    title: 'Postman',
    types: ['other'],
    website: 'https://www.postman.com/',
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
    alt: 'React logo',
    icon: reactIcon,
    name: 'react',
    title: 'React.js',
    types: ['frontend'],
    website: 'https://www.reactjs.com/',
  },
  {
    alt: 'Sass/SCSS logo',
    icon: sassIcon,
    name: 'sass',
    title: 'Sass/SCSS',
    types: ['frontend'],
    website: 'https://sass-lang.com/',
  },
  {
    alt: 'TypeScript logo',
    icon: typescriptIcon,
    name: 'typescript',
    title: 'TypeScript',
    types: ['frontend', 'backend'],
    website: 'https://www.typescriptlang.org/',
  },
  {
    alt: 'Webpack logo',
    icon: webpackIcon,
    name: 'webpack',
    title: 'Webpack',
    types: ['other'],
    website: 'https://webpack.js.org/',
  },
]

export default technologies;
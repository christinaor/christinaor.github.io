import foodTruckMapperImg from '../src/assets/experience-images/food-truck-mapper.png';
import reactimeGif from '../src/assets/experience-images/reactime.gif';
import rebalanceImg from '../src/assets/experience-images/rebalance.png';
import portfolioImg from '../src/assets/experience-images/portfolio-site-v3.png';


const experiences = [
  {
    title: "Reactime",
    articleLink: "https://medium.com/@christinaor/uncovering-reactime-understanding-react-fiber-redux-compatibility-and-zoning-in-on-components-59f0758e0fa3",
    description: "Built features for a React performance tool that monitors application state snapshots and allows developers to switch between snapshots.",
    image: reactimeGif,
    imageAlt: "picture of Reactime",
    githubLink: "https://github.com/open-source-labs/reactime",
    githubLinkImageAlt: "GitHub logo linking to Reactime repository",
    websiteLink: "https://www.reacti.me",
    websiteLinkImageAlt: "website icon linking to Reactime website",
    technologies: ["TypeScript", "React", "D3.js", "Redux DevTools"],
  },
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website where I share my background and showcase some of my work in software engineering.",
    image: portfolioImg,
    imageAlt: "picture of portfolio home view",
    githubLink: "https://github.com/christinaor/christinaor.github.io",
    githubLinkImageAlt: "GitHub logo linking to portfolio site repository",
    websiteLink: "christinaor.github.io/",
    websiteLinkImageAlt: "website icon linking to portfolio website",
    technologies: ["TypeScript", "React", "MongoDB", "Vite"],
  },
  {
    title: "RE:Balance",
    description: "A financial budgeting and reconciliation application which users can use to keep track of their balances with other users.",
    image: rebalanceImg,
    imageAlt: "picture of RE:Balance",
    githubLink: "https://github.com/christinaor/rebalance",
    githubLinkImageAlt: "GitHub logo linking to Reactime repository",
    technologies: ["JavaScript", "React", "PostgreSQL", "SCSS"],
  },
  {
    title: "Food Truck Mapper",
    description: "An application for the food truck connoisseurs in San Francisco, mapping food trucks in a specified location.",
    image: foodTruckMapperImg,
    imageAlt: "picture of Food Truck Mapper application",
    githubLink: "https://github.com/christinaor/food-truck-mapper/",
    githubLinkImageAlt: "GitHub logo linking to food-truck-mapper repository",
    websiteLink: "https://christinaor.com/food-truck-mapper",
    websiteLinkImageAlt: "website icon linking to the site Food Truck Mapper is hosted on",
    technologies: ["TypeScript", "React", "HTML", "Sass/SCSS"],
  },
]

export default experiences;
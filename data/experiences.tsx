import reactimeGif from '../src/assets/experience-images/reactime.gif'
import portfolioImg from '../src/assets/experience-images/portfolio-site.png'

const experiences = [
  {
    title: "Reactime",
    articleLink: "https://medium.com/@christinaor/uncovering-reactime-understanding-react-fiber-redux-compatibility-and-zoning-in-on-components-59f0758e0fa3",
    description: "Built features for a React performance tool that monitors application state snapshots and allows developers to switch between snapshots.",
    image: reactimeGif,
    imageAlt: "picture of Reactime",
    githubLink: "https://github.com/open-source-labs/reactime",
    githubLinkImageAlt: "GitHub logo linking to Reactime repository",
    websiteLink: "https://reactime.dev",
    websiteLinkImageAlt: "website icon linking to Reactime website",
    technologies: ["TypeScript", "React", "D3.js", "Redux DevTools"]
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
    technologies: ["TypeScript", "React", "Vite"]
  }
]

export default experiences;
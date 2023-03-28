import experiencesData from '../../../data/experiences'

// import reactimeGif from '../../assets/experience-images/reactime.gif'

import githubLinkLogo from '../../assets/experience-images/github-svgrepo-com.svg'
import websiteIcon from '../../assets/experience-images/external-link-svgrepo-com.svg'

import styles from './styles.module.scss'

export default function Experiences() {
  return (
    <section id="experiences" className={`${styles.experienceSection}`}>
      <h2 className={`${styles.header}`}>Experiences</h2>
      <div className={styles.experiences}>
        {experiencesData?.map(experience => {
          return (
            <div className={styles.experience}>
              <div className={styles.titleAndLinks}>
                <a href={experience?.articleLink ? experience.articleLink : ''}><h3>{experience.title}</h3></a>

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
                  <li className={styles.technology}>{technology}</li>
                ))}
              </ul>

              
            </div>
          )
        })}

      </div>
      

    </section>
  )
};

// export default function Experiences() {
//   return (
//     <section id="experiences" className={`${styles.experienceSection}`}>
//       <h2 className={`${styles.header}`}>Experiences</h2>
//       <div className={styles.experiences}>
//         <div className={styles.experience}>
//           <a href="https://medium.com/@christinaor/uncovering-reactime-understanding-react-fiber-redux-compatibility-and-zoning-in-on-components-59f0758e0fa3"><h3>Reactime</h3></a>
//           <img src={reactimeGif} alt="picture of reactime" />
//           <p>Built features for a React performance tool that monitors application state snapshots and allows developers to switch between snapshots.</p>
//           <div className={styles.links} >
//             <a href="https://github.com/open-source-labs/reactime">
//               <img src={githubLinkLogo} alt="GitHub logo linking to Reactime repository" />
//             </a>
//             <a href="https://reactime.dev">
//               <img src={websiteIcon} alt="website icon linking to Reactime website" />
//             </a>
//           </div>
//         </div>
//       </div>
      

//     </section>
//   )
// };
import styles from '../styles/Home.module.css'
import { BsArrowRight } from "react-icons/bs";
const ProjectCard = ({name, id, url ,desc}) => {
  return (
     <div className={styles.card}>
      <h2>{name}</h2>
      <div className={styles.imgContainer}>
        <img src={`./images/project${id}.png`} alt="img" />
      </div>
      <p>{desc}</p>
      <button><a href={url}>View more <BsArrowRight size={20} /></a></button>
      </div> 
  )
}

export default ProjectCard

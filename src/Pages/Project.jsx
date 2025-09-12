import React from 'react'
import { projects } from '../Components/ProjectSection'
import styles from '../styles/Project.module.css'
import ProjectCard from '../Components/ProjectCard'
const Project = () => {
  return (
      <section className={styles.projectSection}>
          <h2>Our Creative Projects</h2>
          <blockquote>
            <p> Our Projects page highlights the work we’ve done with dedication, creativity, and technical expertise. Each project reflects our ability to turn ideas into reality through clean design, responsive layouts, and practical functionality</p>
          </blockquote>
          <div className={styles.cardContainer}>
            {projects.map((data)=><ProjectCard  id={data.id} name={data.name} desc={data.description}  url={data.url} key={data.id}  />)}
          </div>
      </section>
 
  )
}

export default Project
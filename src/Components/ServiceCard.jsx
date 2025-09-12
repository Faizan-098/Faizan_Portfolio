import React from 'react'
import styles from '../styles/Service.module.css'
import { FaPaintBrush } from 'react-icons/fa'
const ServiceCard = ({title , para ,icon}) => {
  return (
       
      <div className={styles.serviceCard}>
        <div className={styles.iconContainer}>
          {icon}
        </div>
          <h2>{title}</h2>
          <p>{para}.</p>
      </div>
 )
}

export default ServiceCard
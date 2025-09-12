import React from 'react'
import styles from '../styles/Footer.module.css'
import { FaLocationDot ,FaDiagramProject, FaTwitter, FaGithub } from "react-icons/fa6";
import { MdAddCall,MdEmail } from "react-icons/md";
import { FaHome ,FaServicestack , FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import { Link } from 'react-router';
const Footer = () => {
  return (
    <footer className={styles.footerSection}>
     
     <div className={styles.topFooter}>

     <div className={styles.location}>
       <FaLocationDot className={styles.icon} /> <p>Location :  <span className={styles.name}>Pakistan</span></p>
     </div>

     <div className={styles.contact}>
      <MdAddCall className={styles.icon} /> <p>Contact :  +92182932384</p>
     </div>

     <div className={styles.email}>
      <MdEmail className={styles.icon} /> <p>Email : faizan.imran607@gmail.com</p>
     </div>
     </div>

     <div className={styles.footerMiddle}>
     <div className={styles.info}>
       <h2>Info</h2>
      <p>I’m Faizan Raza, a dedicated Frontend Developer passionate about crafting modern, responsive, and user-friendly websites. Skilled in HTML, CSS, JavaScript, React.Js I enjoy solving real-world problems with clean code and creativity.</p>
     </div>

     <div className={styles.quickLinks}>
       <h2>Quick-Links</h2>
      <ul>
        <li><Link to='/'  className={styles.list}><FaHome /> Home</Link></li>
        <li><Link to='/service' className={styles.list}> <FaServicestack /> Service</Link></li>
        <li><Link to='/project' className={styles.list}><FaDiagramProject/>Projects</Link></li>
        <li><Link to='/contact' className={styles.list}><MdAddCall/>Contact</Link></li>
      </ul>
     </div>
     
     <div className={styles.followUs}>
      <h2>Follow Us</h2>
      <div className={styles.socialLinks}>
         <div className={styles.facebook}>
           <FaFacebookF />
         </div>
         <div className={styles.twitter}>
          <FaTwitter  />
         </div>
         <div className={styles.linkedin}>
         <FaLinkedinIn   />
         </div>
         <div className={styles.github}>
          <FaGithub  />
         </div>
      </div>
     </div>
     </div>

     <div className={styles.footerBottom}>
      <p>Copyright © 2025, All Right Reserved Smash Code</p>
     </div>
    </footer>
  )
}

export default Footer
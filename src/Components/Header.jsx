import React, { useEffect, useRef, useState } from 'react'
import { LuCodeXml } from "react-icons/lu";
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'
const Header = () => {
  const [hide, setHide] = useState(true)
  const menuBar =  useRef(null)

  useEffect(()=>{
     const closeMenuWhenClickedOutside = (event)=>{
        if(!menuBar.current.contains(event.target)){
          setHide(true)          
        }
     }
      document.addEventListener('click',closeMenuWhenClickedOutside)
        return () =>{
         document.removeEventListener('click',closeMenuWhenClickedOutside)
        }
    } 
  
,[])

  
  return (
   <header className={styles.headerSection}>
    <div className={styles.logoBrand}>
      Faizan.Dev <LuCodeXml  className={styles.logoIcon} /> 
    </div>
    <nav>
      <ul className={`${styles.navLink} 
      ${hide ? '' : styles.show}`
    } 
        
      >
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/project'> Project</Link></li>
        <li><Link to='/service'>Services  </Link></li>
        <li><Link to='/contact'>  Contact Us</Link></li>

      </ul>
    </nav>
     <div className={styles.mobileMenu} 
         onClick={()=> setHide(!hide)}
         ref={menuBar}
         >

      <i className="fa-solid fa-bars-staggered"></i>
     </div>
   </header>
  )
}

export default Header
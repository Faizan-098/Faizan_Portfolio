import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router";
const HomeSection = () => {
  // Type Effect
  const [typeWord, setTypeWord] = useState("");
    useEffect(() => {
      let index = 0;
      let name = "Frontend Developer";
      setInterval(() => {
        let letter = name.slice(0, index);
        setTypeWord(letter);
        index > name.length ? (index = 0) : index++;
      }, 150);
    }, []);

  return (
  
         <section className={styles.homeSection}>
           <div className={styles.leftContent}>
             <p className={styles.greeting}>Hi, I'm</p>
             <h1 className={styles.name}>Hafiz Faizan Raza</h1>
             <h2 className={styles.skillName}>
   
               And I am {''}
               <span style={{ borderRight: "1px solid #FFBB00" }}>{typeWord}</span>
             </h2>
             <p className={styles.description}>
               I create modern, responsive, and user‑friendly web interfaces that
               deliver exceptional user experiences. I love turning ideas into
               visually appealing, functional websites using the latest
               technologies and best practices. With a passion for clean code and
               innovative design, I specialize in building interactive web
               applications that engage users and drive results.{" "}
             </p>
             <button className={styles.button}><Link to='/contact'>Let's talk</Link></button>
           </div>
           <div className={styles.rightContent}>
             <img
               src="./images/faizan.jpg"
               className={styles.faizanImg}
               alt="faizanImage"
             />
           </div>
         </section>
  )
}

export default HomeSection
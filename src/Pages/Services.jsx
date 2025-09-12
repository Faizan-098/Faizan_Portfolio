import React from 'react'
import styles from '../styles/Service.module.css'
import ServiceCard from '../Components/ServiceCard'
import { FaCode, FaLaptopCode, FaPaintBrush, FaProjectDiagram } from 'react-icons/fa';
const services = [
  {
    id: 1,
    serviceName: "Web Development",
    para: "I build modern, responsive, and user-friendly websites using the latest technologies. My focus is on clean design, fast performance, and smooth functionality.",
    icon: <FaLaptopCode className={styles.icon} />,
  },
  {
    id: 2,
    serviceName: "Frontend Development",
    para: "I specialize in creating interactive UIs with HTML, CSS, JavaScript, and React. My goal is to deliver pixel-perfect designs that enhance user experience.",
    icon: <FaCode className={styles.icon} />,
  },
  {
    id: 3,
    serviceName: "UI/UX Design",
    para: "I design simple, modern, and visually appealing layouts that ensure users enjoy smooth navigation and a professional look.",
    icon: <FaPaintBrush className={styles.icon} />,
  },
  {
    id: 4,
    serviceName: "Custom Projects",
    para: "From e-commerce to personal portfolios, I develop tailored solutions that meet client needs with scalability and performance in mind.",
    icon: <FaProjectDiagram className={styles.icon} />,
  }
];



const Services = () => {
  return (
    <section className={styles.serviceSection}>
      <h2>What Can We Offer</h2>
            <p>“ We provide professional web solutions designed to bring your ideas to life. From modern frontend development to clean UI/UX design, my services focus on building responsive, fast, and visually appealing websites that leave a lasting impression.”</p>
    <div className={styles.serviceCardcontainer}>
       {services.map((data) => <ServiceCard key={data.id}  title={data.serviceName} para={data.para} icon={data.icon} />)}
    </div>
    </section>
  )
}

export default Services
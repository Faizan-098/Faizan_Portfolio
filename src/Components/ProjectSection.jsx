import { Link } from 'react-router';
import styles from '../styles/Home.module.css'
import ProjectCard from './ProjectCard'
// project Card Data
 const projects = [
  {
    id: 1,
    name: "Ecommerce Store",
    description:
      "A modern e-commerce platform offering stylish kurtas and premium perfumes, built with responsive design and API integration for seamless product management, real-time updates, and a smooth shopping experience.",
    url: "https://smashcode-api-integration-task-2025.netlify.app/"
  },
  {
    id: 2,
    name: "Zara Therapy",
    description:
      "Zara Therapy Website is a clean and simple website made for a therapy center. It includes pages like Home, About, Services, Contact, Therapists, and Gallery. The Home page has a navbar and hero section to welcome visitors.",
    url: "https://faizan-098.github.io/faizan-Potfolio/assets/img/zaraproject.png"
  },
  {
    id: 3,
    name: "Amazon Clone",
    description:
      "This Amazon Clone Landing Page is a simple, responsive web design project built entirely using HTML and CSS. It replicates the basic layout and design of Amazon's homepage, including a navbar, search bar, product grid, and footer.",
    url: "https://my-amazon-clone-2025.netlify.app/"
  },
  {
    id: 4,
    name: "Clone Landing Page",
    description:
      "A sleek and modern landing page clone designed to replicate real-world brand layouts. It includes a responsive navbar, hero section, features section, and a call-to-action area with smooth scrolling and clean UI for showcasing .",
    url: "https://smash-clone-landingpage-2025.netlify.app/"
  },
  {
    id: 5,
    name: "Functional Todo App",
    description:
      "To-Do App is a simple and user-friendly web project built with a clean and responsive design. It includes features like Add To-Do, Edit To-Do, and Delete To-Do. The layout is responsive and adapts well to different screen sizes for a smooth experience.",
    url: "https://smash-js-todo-app-2025.netlify.app/"
  },
  {
    id: 6,
    name: "Mini Ecommerce Store",
    description:
      "Mini Ecommerce Store is a small shopping website with useful features. It includes Sign In and Sign Up pages for user login. Users can add items to cart, remove items, and view the total bill automatically.",
    url: "https://mini-ecommerce-website.netlify.app/#"
  }
];
const ProjectSection = () => {

  return (
     <section className={styles.projectSection}>
        <h2>Projects</h2>
        <p> “As a Smash Code intern, I built innovative projects   showcasing
          creativity, problem-solving, and strong technical skills with
          dedication.”
        </p>
        <div className={styles.cardContainer}>
          {projects.map((data) => <ProjectCard name={data.name} id={data.id} url={data.url} key={data.id} />)}
        </div>
        <button className={styles.button}><Link to='/project'>Read more</Link></button>
      </section>
  )
}

export default ProjectSection
export { projects }
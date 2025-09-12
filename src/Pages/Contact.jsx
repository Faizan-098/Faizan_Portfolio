import React from 'react'
import styles from '../styles/Contact.module.css'
import { FiPhoneCall } from 'react-icons/fi'
import { BsSend } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'
const Contact = () => {
   let submithandler = ()=>{
     alert('Contact Successfully!')
   }
   
  return (
    <section className={styles.contactSection}>
      <h1 className={styles.heading}>Get In Touch </h1>
      <div className={styles.contactTop}>
        <div className={styles.location}>
          <div className={styles.icon}>
           <MdOutlineLocationOn />

          </div>
          <p> Shoe Market Garden West Karachi</p>
        </div>
          <div className={styles.phone}>
          <div className={styles.icon}>
            <FiPhoneCall />
          </div>
          <p> +92182932384
          </p>
        </div>
          <div className={styles.email}>
          <div className={styles.icon}>
           <BsSend />
          </div>
          <p> faizan.imran607@gmail.com</p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.leftContainer}>
          <img src="./images/contact.png" alt="" />
        </div>
        <div className={styles.rightContainer}>
          <form onSubmit={submithandler} >
           <input type="text" name='username' placeholder='Enter Full Name' required />
           <input type="email" name='useremail' placeholder='Enter Email Address' required />
           <textarea name="message" rows={8} placeholder='Type Your Message...'></textarea>
           <button type='submit'>Send me <BsSend/> </button>
          </form>
        </div>
      </div>
       {/* map */}
     <div className={styles.Map}>
      <h2>Our Location on Map</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7097540089!2d66.4959539227841!3d25.19298365062058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1757506822548!5m2!1sen!2s"
   
    height="450"
 
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </section>
  )
}

export default Contact
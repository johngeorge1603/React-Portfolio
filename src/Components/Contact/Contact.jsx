import { motion } from 'framer-motion';
import './Contact.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm('service_6o7dbt5', 'template_ek4ksfb', formRef.current, {
        publicKey: 'TtAWty_Un7bto896i',
      })
      .then(
        (result) => {
          setSuccess(true);
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true);
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <motion.div className='clr'>
        <h1>contact</h1>
      </motion.div>

      <div className='contact'>
        <div className='getInTouch'>
          <motion.h1 initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}}>Get In Touch!</motion.h1>
          <br />
          <br />
          <motion.div initial={{opacity:0}} transition={{duration:1,delay:0.7,staggerChildren:0.05}} whileInView={{opacity:1}}>
            <h3>Mobile</h3>
            <p>+91 8921793203</p>
            <br />
            <h3>E-Mail</h3>
            <p>johngeorge1603@gmail.com</p>
            <br />
            <h3>Location</h3>
            <p>Ernakulam, Kerala</p>

            <motion.div initial={{opacity:0, scale:0.2}}
            animate={{opacity:1, scale:1}}
            transition={{duration:2}}
            className="social">
              <motion.a href="https://www.linkedin.com/in/john-george-835a02282" target='_blank'whileHover={{scale:1.1}}><i className="fa-brands fa-linkedin fa-xl"></i></motion.a>
              <motion.a href="https://github.com/johngeorge1603?tab=repositories" target='_blank' whileHover={{scale:1.1}}><i className="fa-brands fa-square-github fa-xl"></i></motion.a>
              <motion.a href="/JOHN GEORGE RESUME.png" target='_blank' whileHover={{scale:1.1}}><i className="fa-solid fa-circle-down fa-xl"></i></motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className='form' initial={{opacity:0}} transition={{duration:2,delay:1.6,staggerChildren:0.05}} whileInView={{opacity:1}}>
          <form ref={formRef} onSubmit={sendEmail} action="#" method="post">
            <label htmlFor="name"><b>Name:</b></label><br />
            <input type="text" id="name" name="name" required /><br />
            <label htmlFor="email"><b>E-Mail:</b></label><br />
            <input type="email" id="email" name="email" required /><br />
            <label htmlFor="message"><b>Message:</b></label><br />
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br />
            <button type="submit">Send</button>
            {error && " Error"}
            {success && " Success"}
          </form>
          
        </motion.div>
        
      </div>
          <div className='' style={{justifyContent:'end', textAlign:'end', marginRight:'5%'}}>
            <a href="#HomePage">
              <i class="fa-solid fa-circle-chevron-up fa-fade fa-2xl"></i>
            </a>
          </div>
    </div>
  );
}

export default Contact;

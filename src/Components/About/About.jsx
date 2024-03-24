import { motion } from 'framer-motion'
import './About.scss'

function About() {
  return (

    <div >

        <div className="clr">
            <h1>about me</h1>
        </div>


    <div className='about'>
        
        <div className='info'>
            <motion.h3 initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}}><i>Hey!</i></motion.h3>
            <br />
            <motion.p initial={{opacity:0}} transition={{duration:1.5, delay:1}} whileInView={{opacity:1}}><span style={{color:'rgb(92, 179, 209)'}}>I'm John</span>, an enthusiastic MERN Stack Developer with a solid web development foundation.
            Proficient in HTML, CSS, JavaScript, and React, I am a quick learner eager to expand
            my skillset. Committed to staying updated on emerging trends, I bring a fresh
            perspective and dedication to continuous learning in the dynamic field of web
            development. Ready to contribute my skills and motivation to a dynamic team</motion.p>

            <motion.div className="buttons" initial={{opacity:0}} transition={{duration:1.5, delay:2}} whileInView={{opacity:1}}>
                <a href="https://www.linkedin.com/in/john-george-835a02282" target='_blank'><i class="fa-brands fa-linkedin fa-xl"></i></a>
                <a href="https://github.com/johngeorge1603?tab=repositories" target='_blank'><i class="fa-brands fa-square-github fa-xl"></i></a>
                <a href="/JOHN GEORGE RESUME.png" target='_blank'><i class="fa-solid fa-circle-down fa-xl"></i></a>
            </motion.div>
            
        </div>

        <motion.div className='pic' initial={{opacity:0}} transition={{duration:1.5, delay:2}} whileInView={{opacity:1}}>
            <img src="/dp.jpg" alt="" height={'360px'}/>
        </motion.div>

    </div>

    


    </div>
  )
}

export default About
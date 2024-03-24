import React from 'react';
import './Main.scss'; // Import your CSS or SCSS file for styling
import { motion } from 'framer-motion';


function Main() {
    
  return (
    <div className='main'>

            <motion.div className="slidingText" initial={{x:0}} animate={{x:'-220%', transition:{repeat:Infinity, repeatType:'mirror', duration:40}}}>
                Developer Designer Developer Designer
            </motion.div>

        <div className="text-container">

            <motion.h3 initial={{opacity:0}} transition={{duration:3}} whileInView={{opacity:1}} whileHover={{scale:1.1}}>JOHN GEORGE</motion.h3>
            <div className='title'>
                <motion.h1 initial={{opacity:0, scale:0.8}} transition={{duration:1}} whileInView={{opacity:1, scale:1}} whileHover={{scale:0.98}}>WEB DEVELOPER</motion.h1>
                <span><h2>+</h2><motion.h1 whileHover={{scale:0.97}} initial={{opacity:0, scale:0.8 , x:600}} transition={{duration:2}} whileInView={{opacity:1, scale:1 , x:0}}> 
                    DESIGNER</motion.h1></span>
            </div>

            <a href="#About"><i class="fa-solid fa-circle-chevron-down fa-fade fa-2xl"></i></a>

            

        </div>

    </div>
  );
}

export default Main;

import { motion } from 'framer-motion'
import'./Title.scss'


function Title({type}) {
  return (
    <motion.div className='parallax'>

     <motion.h1 whileHover={{scale:0.97}} initial={{opacity:0, scale:0.8 , x:-200}} transition={{duration:1, staggerChildren:10}} whileInView={{opacity:1, scale:1 , x:0}}>
        {type === 'About' ? 'ABOUT' : type === 'Skills' ? 'SKILLS' : type === 'Projects' ? 'PROJECTS' : 'CONTACT' }
    
      </motion.h1>
      
{/* 
      <div className='About'></div>
      <div className='Skills'></div>
      <div className='Projects'></div>
      <div className='Contact'></div> */}

    </motion.div>
  )
}

export default Title
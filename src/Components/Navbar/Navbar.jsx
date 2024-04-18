import { motion } from 'framer-motion'
import './Navbar.scss'
import Sidebar from './Sidebar/Sidebar'


function Navbar() {
  return (
    <div className='navbar bg-transparent'>
        
        <Sidebar/>

        <div className="wrapper bg-transparent">
        
            
            <motion.div initial={{opacity:0, scale:0.2}}
            animate={{opacity:1, scale:1}}
            transition={{duration:2}}
            className="social">
                <motion.a href="https://www.linkedin.com/in/john-george-835a02282" target='_blank' whileHover={{scale:1.1, color:'rgb(92, 179, 209)'}}><i class="fa-brands fa-linkedin fa-xl"></i></motion.a>
                <motion.a href="https://github.com/johngeorge1603?tab=repositories" target='_blank' whileHover={{scale:1.1, color:'rgb(92, 179, 209)'}}><i class="fa-brands fa-square-github fa-xl"></i></motion.a>
                <motion.a href="/JOHN GEORGE RESUME.png" target='_blank' whileHover={{scale:1.1, color:'rgb(92, 179, 209)'}}><i class="fa-solid fa-circle-down fa-xl"></i></motion.a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar
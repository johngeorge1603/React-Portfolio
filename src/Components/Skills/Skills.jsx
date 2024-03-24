import { motion } from 'framer-motion'
import './Skills.scss'


function Skills() {


  return (
    <div style={{height:'100%'}}>

        <motion.div className='clr'>
            <h1>skills</h1>
        </motion.div>
        
        <div style={{display:'flex', flexDirection:'row', width:'100%'}}>

            <motion.div className='text' initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0, delay:2}} transition={{duration:1.5, delay:2}}>
                <h1>and more...</h1>
            </motion.div>

            <div className='skills'>
            <motion.div className='img-box' initial={{opacity:0, scale:0.5, y:500}} transition={{duration:1.5}} whileInView={{opacity:1, scale:1, y:0}}>
                <motion.img src="/html.png" alt="" whileHover={{scale:1.1}}/>
                <motion.img src="/css.png" alt="" whileHover={{scale:1.1}}/>
                <motion.img src="/js.png" alt="" whileHover={{scale:1.1}}/>
                <motion.img src="/bootstrap.png" alt="" whileHover={{scale:1.1}}/>
            </motion.div>
            <motion.div className='img-box' initial={{opacity:0, scale:0.5, y:-500}} transition={{duration:1.5}} whileInView={{opacity:1, scale:1, y:0}}>
                <motion.img src="/react.png" alt="" whileHover={{scale:1.1}}/>
                <motion.img src="/figma.png" alt="" whileHover={{scale:1.1}}/>
                <motion.img src="git.png" alt="" whileHover={{scale:1.1}}/>
                <motion.img src="/node.png" alt="" whileHover={{scale:1.1}}/>
            </motion.div>
            </div>

        </div>
        

    </div>
  )
}

export default Skills
import { motion } from 'framer-motion'


function Links({setOpen}) {



    // Variants for the container animation
const variants = {
    open: {
        transition: {
            staggerChildren: 0.5 // Stagger the animation of children with a delay of 0.1 seconds between each
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.5, // Stagger the animation of children with a delay of 0.05 seconds between each
            staggerDirection: -1 // Reverse the order of staggering when closing
        }
    },
}

// Variants for individual item animation
const itemVariants = {
    open: {
        transition: {
            y: 0, // Move item to original y position
            opacity: 1 // Make item fully visible
        }
    },
    closed: {
        transition: {
            y: 50, // Move item down by 50 pixels
            opacity: 0 // Make item fully transparent
        }
    },
}





    // Array of link items
    const items = [
        "Home",
        "About",
        "Skills",
        "Portfolio",
        "Contact",
    ]

    return (
        <div >
        <motion.div className='links' variants={variants}>
            {/* Map through the array of items and create animated links */}
            {items.map((item) => (
                <motion.a href={`#${item}Page`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={() => setOpen(close)}>
                    {item}
                </motion.a>
            ))}




        </motion.div>

        </div>
    )
}

export default Links

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links/Links';
import Toggle from './Toggle/Toggle';
import "./Sidebar.scss"

function Sidebar() {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
                delay: 0.3,
            }
        },
        closed: {
            clipPath: "circle(20px at 50px 50px)",
            transition: {
                delay: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <div>
        <motion.div className='sidebar' animate={open ? "open" : "closed"} >
            <motion.div className='bg' variants={variants}>
                <Links setOpen={setOpen}/>
            </motion.div>
            <Toggle setOpen={setOpen} open={open}/>


        </motion.div>
        </div>
    );
}

export default Sidebar;

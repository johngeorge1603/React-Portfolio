import React from 'react'


function Toggle({setOpen, open}) {
  return (
   <div>
         <button className='toggle' onClick={()=> setOpen(prev => !prev)}>

            {
                open? <i class="fa-solid fa-xmark fa-xl"></i>:<i class="fa-solid fa-bars fa-lg"></i>
            }
                
         </button>
   </div>
  )
}

export default Toggle
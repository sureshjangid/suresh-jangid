import React from 'react'
import {NavLink} from "react-router-dom"
import {  motion } from "framer-motion";

export const WelcomePage = () => {
    let pageVariants = {
        in: {
          opacity:1,
          y:"0"
        },
        
          out:{
            opacity:0,
            y:"-100vw"
          }
        }
      
      let PageTransition ={
        duration:1
      };
    return (
        <>
           <motion.section className="weclome"
           initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={PageTransition}
          
          >
               <div className="container">
                   <div className="row ">
                       <div className="col-md-12 mx-auto text-center">
                           <h1 className="welcomeH1">Hello, I am <br /> Suresh Jangid</h1>
                           <p className="centerP text-center">Graphic Designer & Developer 💻</p>
                           <NavLink to="Desktop" className="btn1">Explore</NavLink>
                       </div>
                   </div>
               </div>
           </motion.section> 
            
        </>
    )
}

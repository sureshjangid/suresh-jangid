import React from 'react'
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
import {  motion } from "framer-motion";

export const CommonServices = () => {
    return (
        <>
        <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center">
            <NavLink to="YourComputer">
              <img src={back} alt="" className="back"/>
              </NavLink>
            </div>
          
          <div className="col-md-6 text-center ">
          <NavLink to="Desktop">
            <img src={close} alt="" className="close" />
            </NavLink>
          </div>
        </div>
      </div>
           <motion.div className="serviceMain"
           initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
               <div className="contain">
                   <div className="row">
                       <div className="col-lg-5">
                           <h1>Web Develoment</h1>
                       </div>
                   </div>
               </div>
           </motion.div> 
        </>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import folder1 from '../Img/folder1.png'
import back from "../Img/back.png";
import close from "../Img/close.png";
import { motion } from "framer-motion";

export const AboutFile = () => {
 
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
           <motion.section className="aboutFile"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
           >
               <div className="container">
                   <div className="row">
                       <div className="col-md-2">
                       <NavLink to="AboutPage" className="nl">
                           <img src={folder1} alt="" className="aboutFolder1"/>
                           <p className="FolderP">Information</p>
                           </NavLink>
                       </div>
                    
                       <div className="col-md-2">
                       <NavLink to="Technology" className="nl">
                           <img src={folder1} alt="" className="aboutFolder1"/>
                           <p className="FolderP">Skills</p>
                           </NavLink> 

                       </div>
                       <div className="col-md-2">
                       
                           <img src={folder1} alt="" className="aboutFolder1 disableFolder"/>
                           <p className="FolderP disableFolder">Gallery</p>
                            

                       </div>
                   </div>
               </div>
           </motion.section> 
        </>
    )
}

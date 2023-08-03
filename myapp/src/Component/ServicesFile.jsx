import React from 'react'
import folder1 from "../Img/folder1.png"
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
import {  motion } from "framer-motion";

export const ServicesFile = () => {
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
              <motion.section className="ServicesFile"
                initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}>
                <div className="container">
                    <div className="row">
                    <div className="col-md-2">
                       <NavLink to="webDevelopment" className="nl">
                           <img src={folder1} alt="" className="aboutFolder1"/>
                           <p className="FolderP">Website</p>
                           </NavLink>
                       </div>
                       <div className="col-md-2">
                       <NavLink to="uiDesign" className="nl">
                           <img src={folder1} alt="" className="aboutFolder1"/>
                           <p className="FolderP">UI Design</p>
                           </NavLink>
                       </div>
                       <div className="col-md-2">
                       <NavLink to="responsive" className="nl">
                           <img src={folder1} alt="" className="aboutFolder1"/>
                           <p className="FolderP">Responsive</p>
                           </NavLink>
                       </div>
                      
                    </div>
                </div>
            </motion.section>  
        </>
    )
}

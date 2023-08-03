import React from 'react'
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
import folder1 from '../Img/folder1.png'
import {  motion } from "framer-motion";


export const Follow = () => {
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
            <motion.section className="follow"
            initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}>
                <div className="container">
                    <div className="row">
                    <div className="col-md-2">
                      <a href="https://www.instagram.com/suresh_jangid14/" target="_blank" rel="noreferrer" className="text-decoration-none">
                           <img src={folder1} alt="" className="aboutFolder1"/>
                           <p className="FolderP">Instagram</p>
                           </a>
                       </div>
                       <div className="col-md-2">
                       <a href="https://www.facebook.com/profile.php?id=100013646652972" target="_blank" rel="noreferrer"className="text-decoration-none">
                           <img src={folder1} alt="" className="aboutFolder1"/>
                           <p className="FolderP">Fackbook</p>
                           </a>
                       </div>
                       <div className="col-md-2">
                      <a href="https://www.linkedin.com/in/suresh-jangid-298023213/" target="_blank"  rel="noreferrer" className="text-decoration-none">
                           <img src={folder1} alt="" className="aboutFolder1"/>
                           <p className="FolderP">linkedin</p>
                           </a>
                       </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

import React from 'react'
import folder1 from '../Img/folder1.png'
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
import {  motion } from "framer-motion";

export const BlogFile = () => {
    return (
        <>
        <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center">
            <NavLink to="YourComputer">
              <img src={back} alt="" className="back"/>
              </NavLink>
            </div>
          
          <div className="col-md-6 text-center">
          <NavLink to="Desktop">
            <img src={close} alt="" className="close" />
            </NavLink>
          </div>
        </div>
      </div>
        <motion.section className="blog"
        initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
            <div className="container">
                <div className="row">
                <div className="col-md-2">
                <a href="https://sureshjangid.in/blog/react-js-in-hindi/" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <img src={folder1} alt="" className="aboutFolder1"/>
                    <p className="FolderP">React.js Hindi</p>
                    </a>
                </div>   
                <div className="col-md-2">
                <a href="https://sureshjangid.in/blog/page/2/" target="_blank" rel="noreferrer"  className="text-decoration-none">
                    <img src={folder1} alt="" className="aboutFolder1"/>
                    <p className="FolderP">Insta Clone</p>
                    </a>
                </div>
                <div className="col-md-2">
                <a href="https://sureshjangid.in/blog/windows-11/" target="_blank" rel="noreferrer"  className="text-decoration-none">
                    <img src={folder1} alt="" className="aboutFolder1"/>
                    <p className="FolderP">Windows 11</p>
                    </a>
                </div>
                <div className="col-md-2">
                <a href="https://sureshjangid.in/blog/" target="_blank" rel="noreferrer"  className="text-decoration-none">
                    <img src={folder1} alt="" className="aboutFolder1"/>
                    <p className="FolderP">All Blog</p>
                    </a>
                </div>
                </div>
            </div>
        </motion.section>
        </>
    )
}

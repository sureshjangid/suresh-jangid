import React from "react";
import folder1 from "../Img/folder1.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
import {  motion } from "framer-motion";


export const ProjectFile = () => {
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
      <motion.section className="projectFile"
        initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <NavLink to="Project1">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">Fourms</p>
            </div>
            <div className="col-md-2">
              <NavLink to="Project2">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
                <p className="FolderP">Crypto currency</p>
            </div>
            <div className="col-md-2">
              <NavLink to="Project3">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">Chatroom</p>
            </div>
            <div className="col-md-2">
              <NavLink to="Project4">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">YouTube Clone</p>
            </div>
            <div className="col-md-2">
              <NavLink to="Project5">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">React Ecommerce </p>
            </div>

            <div className="col-md-2">
              <NavLink to="Project6">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">Quik Shoping</p>
            </div>

            <div className="col-md-2">
              <NavLink to="Project7">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">Jemart India</p>
            </div>
            <div className="col-md-2">
              <NavLink to="Project8">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">Google Clone</p>
            </div>

            <div className="col-md-2">
              <NavLink to="Project9">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">Movix</p>
            </div>
            <div className="col-md-2">
              <NavLink to="Project10">
                <img src={folder1} alt="" className="aboutFolder1" />
              </NavLink>
              <p className="FolderP">Weather App</p>
            </div>

          

            <div className="col-md-2">
              <a href="https://github.com/sureshjangid" target="_blank" rel="noreferrer">
                <img src={folder1} alt="" className="aboutFolder1" />
              </a>

              <p className="FolderP">More Project</p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

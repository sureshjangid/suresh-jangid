import React from "react";
import email from "../Img/email.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
import {  motion } from "framer-motion";

export const Email = () => {
  return (
    <>
    <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center">
            <NavLink to="HireFile">
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
      <motion.section className="email"
      initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="callH1 text-center">
                <img src={email} alt="call" />  sureshjangir902@gmail.com </h1>
               
             
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

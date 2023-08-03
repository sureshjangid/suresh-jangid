import React from "react";
import Pc from "../Img/pc.png";
import Folder from "../Img/folder.png";
import network from "../Img/network.png";
 import control from "../Img/panel.png";
 import pubg from "../Img/pubg.png";
import { NavLink } from "react-router-dom";
import {  motion } from "framer-motion";

export const Desktop = () => {
  let pageVariants = {
    in: {
      opacity:1,
      x:"0"
    },
    
      out:{
        opacity:0,
        x:"-100vw"
      }
    }
  
  let PageTransition ={
    duration:1
  };

  return (
    <>
    
      <motion.section className="desktop"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={PageTransition}
       >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 ">
                <img src={Folder} alt="" className="folder disableFolder" />
              <br />
              <p className="folderP disableFolder">User</p>

              <br />
          
              <NavLink to="YourComputer" className="nl">
                <img src={Pc} alt="" className="pc" />
              
              
              <br />
              <p className="pcP">Your Pc</p>
</NavLink>
              <img src={control} alt="" className="folder disableFolder" />
              <br />
              <p className="folderP disableFolder">panel</p>

              <img src={network} alt="" className="folder disableFolder" />
              <br />
              <p className="folderP disableFolder">Network</p>

              <img src={pubg} alt="" className="folder disableFolder" />
              <br />
              <p className="folderP disableFolder">Pubg</p>
            </div>
          </div>
        </div>
      </motion.section>
     
    </>
  );
};

import React from "react";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export const YourComputer = () => {
  return (
    <>
      <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center ">
            <NavLink to="Desktop">
              <img src={back} alt="" className="back"/>
              </NavLink>
            </div>
          
          <div className="col-md-6 text-center">
          <NavLink to="Desktop">
            <img src={close} alt="" className="close " />
            </NavLink>
          </div>
        </div>
      </div>
      <motion.section className="yourPc" 
       initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3  Home">
              <NavLink to="/" className="nl">
                <p className="mb-0 text-white HomeP HomePara">Home</p>
                <div className="progress ">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mb-0 text-white nl">3.2 GB free of 160 GB</p>
              </NavLink>
            </div>
            <div className="col-md-3  Home">
              <NavLink to="AboutFile" className="nl">
                <p className="mb-0 text-white HomeP">About</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mb-0 text-white">53 GB free of 110 GB</p>
              </NavLink>
            </div>

            <div className="col-md-3 Home">
              <NavLink to="ProjectFile" className="nl">
                <p className="mb-0 text-white HomeP">Project</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mb-0 text-white">62 GB free of 150 GB</p>
              </NavLink>
            </div>
            <div className="col-md-3 Home">
              <NavLink to="/DesignFile" className="nl">
                <p className="mb-0 text-white HomeP">Design</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "62%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mb-0 text-white"> 17 GB free of 109 GB</p>
              </NavLink>
            </div>
     
            <div className="col-md-3 Home">
              <NavLink to="/HireFile" className="nl">
                <p className="mb-0 text-white HomeP">Hire Me</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mb-0 text-white">110 GB free of 265 GB</p>
              </NavLink>
            </div>
            <div className="col-md-3 Home">
              <NavLink to="/Follow" className="nl">
                <p className="mb-0 text-white HomeP">Follow</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mb-0 text-white">0 GB free of 1 GB</p>
              </NavLink>
            </div>
         
          </div>
        </div>
      </motion.section>
    </>
  );
};

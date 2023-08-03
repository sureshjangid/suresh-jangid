import React from "react";
import for1 from "../Img/for1.png";
import for2 from "../Img/for2.png";
import for3 from "../Img/for3.png";
import { CommonProject } from "./CommonProject";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Project1 = () => {
  return (
    <>
    <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center">
            <NavLink to="ProjectFile">
              <img src={back} alt="" className="back"/>
              </NavLink>
            </div>
          
          <div className="col-md-1 ">
          <NavLink to="Desktop">
            <img src={close} alt="" className="close" />
            </NavLink>
          </div>
        </div>
      </div>
      <CommonProject
        img={for1}
        img2={for2}
        img3={for3}
        h3=" http://forums.sureshjangid.in/"
        a=" http://forums.sureshjangid.in/"
        li1="- This is an Online Discussion Website like Stack Overflow."
        li2="- This Website also has a Login system(with full security)."
li3 ="- We can also add comments and threads."
      />
    </>
  );
};

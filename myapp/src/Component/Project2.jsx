import React from 'react'
import { CommonProject } from "./CommonProject";
import dev1 from "../Img/dev1.png";
import dev2 from "../Img/dev2.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Project2 = () => {
    return (
        <>
        <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center">
            <NavLink to="ProjectFile">
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
         <CommonProject
        img={dev1}
        img2={dev2}
        img3={dev1}
        h3="http://crypto.sureshjangid.in"
        a=" http://crypto.sureshjangid.in/"
        li1="- Crypto currency Website"
        li2="- I Build this website using (React.js)"
        li3='- Crypto Data coming from Crypto free APIs'
      />   
        </>
    )
}

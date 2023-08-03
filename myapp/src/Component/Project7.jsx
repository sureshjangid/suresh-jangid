import React from 'react'
import { CommonProject } from "./CommonProject";
import j1 from "../Img/j1.png";
import j2 from "../Img/j2.png";
import j3 from "../Img/j3.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Project7 = () => {
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
        img={j1}
        img2={j2}
        img3={j3}
        h3=" http://jemartindia.com"
        a=" http://jemartindia.com"
        li1="- Developed 'Jemart India' website. It's an e-commerce website, which
provides online shopping in a much simpler and seamless process.
"
        li2="- I have also used a payment gateway and COD on this website ."
        li3="- User can login with Mobile number or email also ."

      /> 
        </>
    )
}

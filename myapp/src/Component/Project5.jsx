import React from 'react'
import { CommonProject } from "./CommonProject";
import ecom1 from "../Img/ecom1.png";
import ecom2 from "../Img/ecom2.png";
import ecom3 from "../Img/ecom3.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Project5 = () => {
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
        img={ecom1}
        img2={ecom2}
        img3={ecom3}
        h3="http://react-eco.sureshjangid.in/"
        a=" http://react-eco.sureshjangid.in/"
        li1="- Developed an online shopping web application using React.js & Firebase. "
        li2="- Implementing features such as product catalog, shopping cart, and checkout process with
        COD & Online Payment"
        li3="Implemented user authentication functionality with login and signup features, leveraging Firebase's authentication system for secure and efficient user management."

      /> 
        </>
    )
}

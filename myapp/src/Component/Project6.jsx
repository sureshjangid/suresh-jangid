import React from 'react'
import { CommonProject } from "./CommonProject";
import quik1 from "../Img/q1.png";
import quik2 from "../Img/q2.png";
import quik3 from "../Img/q3.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Project6 = () => {
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
        img={quik1}
        img2={quik2}
        img3={quik3}
        h3=" http://quikshoping.shop"
        a=" http://quikshoping.shop"
        li1="- Developed 'Quik Shopping' website. It's an e-commerce website, which
provides online shopping in a much simpler and seamless process.
"
        li2="-  On this website, I use google login APIs."
        li3="-  - I have also used a payment gateway on this website & Users can return products also."

      /> 
        </>
    )
}

import React from 'react'
import { CommonProject } from "./CommonProject";
import a1 from "../Img/a1.png";
import a2 from "../Img/a2.png";
// import w3 from "../Img/w3.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Project10 = () => {
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
        img={a1}
        img2={a2}
        img3={a1}
        h3="http://weather-app.sureshjangid.in/"
        a=" http://weather-app.sureshjangid.in/"
        li1="- Developed 'Weather App' website. It helps us to check the Weather."
        li2="- This Weather Website is developed in React.js"
        li3="- On this website , I have used weather APIs to get the weather report"
      /> 
        </>
    )
}

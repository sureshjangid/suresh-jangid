import React from 'react'
import { CommonProject } from "./CommonProject";
import h1 from "../Img/g1.png";
import h2 from "../Img/g2.png";
import h4 from "../Img/g3.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Project8 = () => {
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
        img={h1}
        img2={h2}
        img3={h4}
        h3=" https://google-clone.sureshjangid.in/"
        a=" https://google-clone.sureshjangid.in/"
        li1="- Developed a Google clone web application using React.js & Google API, leveraging Vite as the
        bundler for the project.
        
"
        li2="- Implemented various features such as search functionality, title change, image & pagination, and
        search results display, utilizing Google's APIs to retrieve and display relevant data.
        "

      /> 
        </>
    )
}

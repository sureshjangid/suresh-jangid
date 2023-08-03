import React from 'react'
import {CommonDesign} from "./CommonDesign"
 import cafe from "../Img/cafe1.png"
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Design2 = () => {
    return (
        <>
         <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center">
            <NavLink to="DesignFile">
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
           <CommonDesign 
                img = {cafe}
           /> 
        </>
 
 )
}

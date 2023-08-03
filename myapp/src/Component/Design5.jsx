import React from 'react'
import {CommonDesign} from "./CommonDesign"
 import gymBanner from "../Img/gymFit-24.png"
 import gymBanner1 from "../Img/gym_fit-24– 2.png"
 import gymBanner3 from "../Img/Bhanu-gym-1.png"
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Design5 = () => {
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
                img = {gymBanner}
                img2 = {gymBanner1}
                img3 = {gymBanner3}
           /> 
        </>
 
 )
}

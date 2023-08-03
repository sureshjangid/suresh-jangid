import React from 'react'
import respo from "../Img/resposives1.svg"
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Service3 = () => {
    return (
        <>
         <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center">
            <NavLink to="ServicesFile">
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
         <section className="serviceMain">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1 className="service1">Responsive</h1>
              <p className="serviceP">
              Responsive Web Design is important for an optimal viewing experience.Responsive Web Design is important for an optimal viewing experience. I create responsive websites which resize, hide, shrink, or enlarge as per the devices (desktops, tablets, and mobile phones etc).
       
              </p>
              <ul className="ulLi">
                  <li>Desptop</li>
                  <li>Table</li>
                  <li>Moblie</li>
               
              </ul>
            </div>
            <div className="col-lg-7 webPage1">
                <img src={respo} alt=""  />
            </div>
          </div>
        </div>
      </section>  
        </>
    )
}

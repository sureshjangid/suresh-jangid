import React from 'react'
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
import ui from "../Img/ui.svg"
export const Service2 = () => {
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
              <h1 className="service1">UI Design</h1>
              <p className="serviceP">
              I really love to  Design for my Client. I have experience in this filed not so much but okay okay.
              You can see my designs in Design secion you will love them really .
       
              </p>
              <ul className="ulLi">
                  <li>UI design</li>
                  <li>Web design</li>
                  <li>Moblie Apps design</li>
                  <li>Landing page design</li>
              </ul>
            </div>
            <div className="col-lg-7 webPage">
                <img src={ui} alt=""  />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

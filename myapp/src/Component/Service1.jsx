import React from "react";
import web from "../Img/webPage.svg"
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Service1 = () => {
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
              <h1 className="service1">Web Develoment</h1>
              <p className="serviceP">
                Offering all kinds of custom built websites, web portals and web
                applications.We advanced frameworks and proven methodologies to
                ensure that our solutions are future-ready and scalable. We have
                an excellent team of web development experts who are constantly
                experimenting and implementing innovative ideas that will
                transform website designs into a gold mine for your business.
              </p>
              <ul className="ulLi">
                  <li>Portfolio website</li>
                  <li>Dynamic website development</li>
                  <li>Custom website development</li>
                  <li>WordPress web development</li>
              </ul>
            </div>
            <div className="col-lg-7 webPage">
                <img src={web} alt=""  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

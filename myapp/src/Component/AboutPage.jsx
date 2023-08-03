import React from "react";
import about from "../Img/img.svg";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const AboutPage = () => {
  return (
    <>
      <div className="container-fluid menu">
        <div className="row menuBar">
          <div className="col-md-6 text-center">
            <NavLink to="AboutFile">
              <img src={back} alt="" className="back" />
            </NavLink>
          </div>

          <div className="col-md-6 text-center ">
            <NavLink to="Desktop">
              <img src={close} alt="" className="close" />
            </NavLink>
          </div>
        </div>
      </div>
      <motion.section
        className="About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <h1 className="text-white aboutH1">
                I’m Shy, Please Contact Me To Say Hi 🖐️.
              </h1>
              <h5 className="aboutH5">
                UI Designer Just Design And I'm that person who Develops.
              </h5>
              <br />
              <p className="text-white">
                I'm a skilled software developer with experience in JavaScript,
                and expertise in React & Node.js. I have experience developing
                and implementing solutions to help these companies build and
                market their web-based products.I have worked on Different types
                of domains like E-commerce, CRM, Business web, etc...
              </p>
              <p className="text-white">
                When I'm not coding or pushing pixels.You'all find me in the
                chill place.
              </p>
              <ul className="uderList">
                <li> As a passionate software developer with 2 years of experience in ReactJs, I strive to create elegant, efficient, and user-friendly web applications. 
</li>
                <li> My expertise lies in developing robust web applications and RESTful APIs using ReactJs and NodeJs..</li>
                <li>I have experience working with both product-based and service-based companies, which has helped me gain a deep understanding of customer needs and business requirements.</li>
                <li> With my strong problem-solving skills, attention to detail, and willingness to learn, I am committed to delivering high-quality solutions that exceed expectations.
</li>
                <li>I am excited about the opportunity to work on challenging projects and collaborate with talented professionals to achieve shared goals.</li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-12 aboutImg">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

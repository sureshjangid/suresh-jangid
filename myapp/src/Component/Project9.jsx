import React from "react";
import { CommonProject } from "./CommonProject";
import w1 from "../Img/m1.png";
import w2 from "../Img/m2.png";
import w3 from "../Img/m3.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from "react-router-dom";
export const Project9 = () => {
  return (
    <>
      <div className="container-fluid menu">
        <div className="row menuBar">
          <div className="col-md-6 text-center">
            <NavLink to="ProjectFile">
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
      <CommonProject
        img={w1}
        img2={w2}
        img3={w3}
        h3="https://movix-website.vercel.app/"
        a="https://movix-website.vercel.app/"
        li1="- Developed a user-friendly website using ReactJS and Redux that included features such as lazy
        loading, infinite scroll, React Player, React-Circular-Progressbar, Dayjs, and search bar.
        "
        li2="- Utilized lazy loading and infinite scroll features to improve website performance and user
        experience, allowing for faster load times and easier browsing of large amounts of content..
"
      />
    </>
  );
};

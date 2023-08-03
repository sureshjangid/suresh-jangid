import React from "react";
import { CommonProject } from "./CommonProject";
import card1 from "../Img/y0.png";
import card2 from "../Img/y1.png";
import card3 from "../Img/y2.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from "react-router-dom";
export const Project4 = () => {
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
        img={card1}
        img2={card2}
        img3={card3}
        h3="https://youtube-clone.sureshjangid.in/"
        a="https://youtube-clone.sureshjangid.in/"
        li1="- Built a YouTube clone web application using React.js & YouTube API, utilizing npm for package
        management.
        "
        li2="- Designed and developed various features such as search functionality, video player, and
        recommended videos.
        "
      />
    </>
  );
};

import React from "react";
import { CommonProject } from "./CommonProject";
import chat1 from "../Img/chat1.png";
import chat2 from "../Img/chat2.png";
import chat3 from "../Img/chat3.png";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
export const Project3 = () => {
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
        img={chat1}
        img2={chat2}
        img3={chat3}
        h3=" http://chatroom.sureshjangid.in/"
        a=" http://chatroom.sureshjangid.in/"
        li1="- - Created a group chat application using(JavaScript, PHP & MYSQL)."

        li2="- - In this chat room you can chat with your friends."

      />
    </>
  );
};

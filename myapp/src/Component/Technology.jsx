import React from "react";
import back from "../Img/back.png";
import close from "../Img/close.png";
import { NavLink } from 'react-router-dom'
import {  motion } from "framer-motion";


export const Technology = () => {
  return (
    <>
    <div className="container-fluid menu">
        <div className="row menuBar">
          
            <div className="col-md-6 text-center">
            <NavLink to="AboutFile">
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
      <motion.section className="technology"
      initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 offer mt-5">
              <h1 className="text-center">What Do I Offer</h1>
              <hr className="new1" />
            </div>
            <div className="col-sm-4">
              <h3 className="codingH1">Coding Skill</h3>
              <p className="techP">HTML</p>
              <div className="progress">
                <div
                  className="progress-bar html"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
              <br />
              {/* Css */}
              <p className="techP">Css</p>
              <div className="progress">
                <div
                  className="progress-bar css"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
              <br />
              {/* sass */}
              <p className="techP">Sass</p>
              <div className="progress">
                <div
                  className="progress-bar sass"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  60%
                </div>
              </div>
              {/* javaScript */}
              <br />
              <p className="techP">javaScript</p>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
              <br />
              {/* React.js */}
              <p className="techP">React.js</p>
              <div className="progress">
                <div
                  className="progress-bar React"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  55%
                </div>
              </div>
              <br />
              <p className="techP">Redux</p>
              <div className="progress">
                <div
                  className="progress-bar React"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  55%
                </div>
              </div>
              <br />
               {/* PHP  */}
              <p className="techP">Node</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "59%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  59%
                </div>
              </div>
              <br/>
              {/* PHP  */}
              <p className="techP">PHP</p>
              <div className="progress">
                <div
                  className="progress-bar PHP "
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75%
                </div>
              </div>
              <br/>
              <p className="techP">Restful Api</p>
              <div className="progress">
                <div
                  className="progress-bar PHP"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  62%
                </div>
              </div>
              <br/>
              <p className="techP">Laravel</p>
              <div className="progress">
                <div
                  className="bg-danger text-white text-center"
                  role="progressbar"
                  style={{ width: "47%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  47%
                </div>
              </div>
              <br />
              {/* mySqli */}
              <p className="techP">mySqli</p>
              <div className="progress">
                <div
                  className="progress-bar mySqli"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  60%
                </div>
              </div>
              <br />
              {/* Bootstrap */}
              <p className="techP">Bootstrap</p>
              <div className="progress">
                <div
                  className="progress-bar Bootstrap"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  85%
                </div>
              </div>
              <br />
              {/* Wordpress */}
              <p className="techP">WordPress</p>
              <div className="progress mb-5">
                <div
                  className="progress-bar WordPress"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  55%
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <h3 className="codingH1">Tools</h3>
              <p className="techP">Adobe XD</p>
              <div className="progress">
                <div
                  className="progress-bar Adobe"
                  role="progressbar"
                  style={{ width: "56%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  56%
                </div>
              </div>
              <br />
              {/* figma */}
            

              <p className="techP">Figma</p>
              <div className="progress">
                <div
                  className="progress-bar Figma"
                  role="progressbar"
                  style={{ width: "52%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  52%
                </div>
              </div>
              <br />
              {/* ms office */}
              <p className="techP">MS Office</p>
              <div className="progress">
                <div
                  className="progress-bar ms"
                  role="progressbar"
                  style={{ width: "63%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  63%
                </div>
              </div>
              <br />
              {/* Photoshop */}
              <p className="techP">Photoshop</p>
              <div className="progress">
                <div
                  className="progress-bar Photoshop"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  60%
                </div>
              </div>
              <br />
              {/* lightroom  */}
              <p className="techP">Lightroom</p>
              <div className="progress">
                <div
                  className="progress-bar Lightroom"
                  role="progressbar"
                  style={{ width: "72%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  72%
                </div>
              </div>
              </div>
              <div className="col-sm-4">
                  <h1 className="codingH2">Skill Set</h1>
                  <ul className="list-unstyled codingUl text-white">
                      <li>- Programming(C)</li>
                      <li>- CMD Shell</li>
                      <li>- Git Shell</li>
                      <li>- Team Player</li>
                      <li> -Fast Learne</li>
                      
                  </ul>
              </div>
            </div>
          </div>
   
      </motion.section>
    </>
  );
};

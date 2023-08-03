import React from "react";
import { motion } from "framer-motion";

export const CommonProject = (props) => {

  return (
    <>
    
      <motion.section className="project"
      initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
        <div className="container">
          <div className="row projectRow">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.img} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={props.img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={props.img3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <a
                href={props.a}
                target="_blank"
                className="text-decoration-none"
                rel="noreferrer"
              >
                <h3 className="projectA">{props.h3} </h3>
              </a>
            </div>
            <div className="col-md-6 mx-auto text-center mt-5">
              <ul className="list-unstyled">
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

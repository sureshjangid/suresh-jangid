import React from 'react'
import {  motion } from "framer-motion";

export const CommonDesign = (props) => {
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
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.img} className="d-block w-100" alt="..."/>
      <img src={props.img2} className=" mt-5 d-block w-100" alt="..."/>
      <img src={props.img3} className=" mt-5 d-block w-100" alt="..."/>
    </div>
  </div>
</div>
          </div>
        </div>
      </motion.section>
        </>
    )
}

import React, { useState, useRef } from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowBtn from './ArrowBtn';


const Eventcard = ({ data }) => {

  const { width1, height1, image1, parag1, width2, height2, image2, parag2 } = data;
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });


  const y = useTransform(scrollYProgress, [0, 1], [150, -200]);


  return (
    <>
      <div
        ref={ref}
        className="w-full h-screen flex gap-1 mt-5 ">
        <motion.div
          style={{ y }}
          className="left-card flex flex-col justify-start w-1/2 h-full  py-8 px-32">
          <div className={`img-container w-${width1} h-${height1} relative rounded-2xl bg-red-500 overflow-hidden`}>
            <ArrowBtn />
            <img className='w-full h-full object-cover' src={image1} alt="" />
          </div>
          <div className="card-para">
            <p className='text-lg py-8'>
              {parag1}
            </p>
          </div>
        </motion.div>

        <div
          className="right-card flex flex-col justify-end w-1/2 h-full  px-32">
          <div className={`img-container relative w-${width2} h-${height2} rounded-2xl bg-red-500 overflow-hidden`}>
            <ArrowBtn />
            <img className='image w-full h-full object-cover' src={image2} alt="" />
          </div>
          <div className="card-para">
            <p className='text-lg py-8'>
              {parag2}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Eventcard
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
      <div ref={ref} className="w-full h-screen flex flex-col lg:flex-row gap-4 mt-5">
        <motion.div
          style={{ y }}
          className="left-card flex flex-col justify-start w-full lg:w-1/2 h-full py-4 px-4 lg:py-8 lg:px-16"
        >
          <div className={`img-container w-full h-[80vw] lg:w-${width1} lg:h-${height1} relative rounded-2xl bg-red-500 overflow-hidden`}>
            <ArrowBtn />
            <img className="w-full h-full object-cover" src={image1} alt="" />
          </div>
          <div className="card-para">
            <p className="text-sm lg:text-lg py-4 lg:py-8">{parag1}</p>
          </div>
        </motion.div>

        <div className="right-card flex flex-col justify-end w-full lg:w-1/2 h-full py-4 px-4 lg:py-8 lg:px-16">
          <div className={`img-container w-full h-[80vw] lg:w-${width2} lg:h-${height2} relative rounded-2xl bg-red-500 overflow-hidden`}>
            <ArrowBtn />
            <img className="w-full h-full object-cover" src={image2} alt="" />
          </div>
          <div className="card-para">
            <p className="text-sm lg:text-lg py-4 lg:py-8">{parag2}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Eventcard
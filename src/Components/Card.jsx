import React, { useState } from "react";
import { BsArrowRight } from 'react-icons/bs'
import { easeInOut, motion } from "framer-motion";

const Card = ({ data }) => {
    const { heading1, heading2, start, bgco, width, hoverColor } = data;
    const [padding, setPadding] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <motion.div
                onMouseEnter={() => setPadding(5)}
                onMouseLeave={() => setPadding(0)}
                whileHover={{ backgroundColor: hoverColor }}
                className={`${width} min-h-[64vh] ${bgco} rounded-2xl p-5 flex flex-col hover:bg-[#7443FF] transition-all ease-in-out duration-[0.5s] justify-between`}>
                <div style={{ padding: `${0} ${padding}px` }} className="w-full duration-500 ease-expo">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">{heading1}</h1>
                        <BsArrowRight className="text-lg md:text-xl lg:text-2xl" />
                    </div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium mt-5 w-full md:w-3/4 lg:w-1/2">{heading2}</h1>
                </div>


                <div>
                    {
                        start ? (

                            <>
                                <h1 className="text-4xl whitespace-nowrap font-semibold">
                                    Start a project
                                </h1>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="border overflow-hidden flex flex-col px-7 py-3 h-12 w-36 mt-4 rounded-full font-semibold text-base">
                                    <motion.span
                                        animate={{ y: isHovered ? "-150%" : "0" }}
                                        transition={{ ease: easeInOut }}
                                        className="whitespace-nowrap">Contact Us</motion.span>
                                    <motion.span
                                        animate={{ y: isHovered ? "-100%" : "50%" }}
                                        transition={{ ease: easeInOut }}
                                        className="whitespace-nowrap">Contact Us</motion.span>
                                </motion.button>
                            </>
                        ) : (
                            <p className="text-xs text-zinc-300">
                                Explore what divides our team.
                            </p>
                        )
                    }

                </div>

            </motion.div>
        </>
    )
}

export default Card
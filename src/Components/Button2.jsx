import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";
import { PiArrowBendDownRight } from "react-icons/pi";

const Button2 = ({ text = "View More Works" }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (

        <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="primary-btn h-[8vh]  px-5 py-4 border-solid border-[1px] border-white text-white flex flex-col items-center overflow-hidden rounded-full">
            <motion.div
                animate={{ y: isHovered ? "-200%" : "-20%" }}
                transition={{ ease: easeInOut }}
                className="flex translate-y-full w-full items-center justify-between gap-4">
                <span className="text-lg">{text}</span>
                <motion.div
                    animate={{ y: isHovered ? "-280%" : 1 }}
                    transition={
                        {
                            ease: "linear",
                            duration: 0.5,
                            x: { duration: 1 }
                        }
                    }
                >
                    <PiArrowBendDownRight size={".7em"} />
                </motion.div>
            </motion.div>
            <motion.div
                animate={{ y: isHovered ? "-120%" : 0 }}
                transition={{ ease: easeInOut }}
                className="flex translate-y-full w-full items-center justify-between gap-4">
                <span className="text-lg">{text}</span>
                <motion.div
                    animate={{ y: isHovered ? 1 : "280%" }}
                    transition={{
                        ease: "linear",
                        duration: 0.5,
                        x: { duration: 1 }
                    }}
                >
                    <PiArrowBendDownRight size={".7em"} />
                </motion.div>
            </motion.div>
        </motion.button>
    )
}

export default Button2
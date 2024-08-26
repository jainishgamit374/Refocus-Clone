import React, { useState } from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";


const ArrowBtn = ({ text = "Read Artical" }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.1, width: "11vw" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="btn-cont absolute bottom-[3%] text-lg left-[4%] bg-[#ffff] text-black flex items-center justify-between flex-wrap  rounded-full w-[3vw] h-[3vw] overflow-hidden">
            <button
            className='text-lg origin-left bg-[#ffff] text-black flex items-center justify-center rounded-full w-[3vw] h-[3vw]'><BsArrowUpRight /></button>
            <h1 className='htext text-sm pr-5'>{text}</h1>
        </motion.div>
    );
};

export default ArrowBtn;
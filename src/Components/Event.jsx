import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Button2 from './Button2';
import ArrowBtn from './ArrowBtn';

const Event = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Adjust scroll speed for left and right content

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const y = useTransform(scrollYProgress, [0, 1], [150, -250]);


    return (
        <div className="w-full mt-10 py-16">
            <div className="container mx-auto w-full flex items-center h-[150vh]">
                <div className="left-content w-1/2 h-screen flex flex-col justify-between items-start py-10 px-4 leading-none overflow-visible">
                    <h2 className="left-heading text-[11vw] flex flex-col leading-none">
                        <span className='text-cont flex flex-col absolute z-[2]'>
                            <span>Forward</span>
                            <span className='px-[7vw]'>Thinking</span>
                        </span>
                    </h2>
                    <div className="left-para w-[70%] flex flex-col items-start gap-8 ml-24">
                        <p
                            className="para-text text-[1.6vw]">
                            Redefining the creative world with design, innovation, and forward-thinking as a leading Webflow Agency.
                        </p>
                        <Button2 text='News & Insights' />
                    </div>
                </div>

                <motion.div
                    ref={ref}
                    className="w-full lg:w-1/2 mt-8 lg:mt-0"
                    style={{ y }}
                >
                    <motion.div
                        style={{ opacity }}
                        className="right-content rounded-xl relative overflow-hidden"
                    >
                        <ArrowBtn />
                        <video
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover pointer-events-none"
                            src="https://cdn.refokus.com/website/people-short.webm"
                        ></video>
                    </motion.div>
                    <h1 className="py-2 text-[3vw] sm:text-[2vw] lg:text-[1.3vw]">
                        Refokus 2022 Offsite: Where Work Meets Play, Innovation, and Homemade Pasta.
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}

export default Event;

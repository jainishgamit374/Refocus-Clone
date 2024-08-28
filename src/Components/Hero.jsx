import React from 'react'
import Projectmain from '../GLSL/Projectmain'

const Hero = () => {
    return (
        <>
            <div className="w-full px-3 overflow-hidden">
                <div className="max-w-screen-xl h-[75vh] md:h-[80vh] mx-auto px-4 flex flex-col md:flex-colum lg:flex-row  items-end md:items-center lg:items-end justify-between relative">
                    <div className="left w-full md:w-[100%] mb-10 md:mb-0">
                        <h1 className=" text-[18vw] md:text-[13vw] lg:text-[11vw] leading-none md:leading-[12vw] lg:leading-[9vw] md:text-center lg:text-start select-none">
                            WE <br /> MAKE <br /> COOL <br /> WEBSITES
                        </h1>
                    </div>
                    <div className="glsl-container  w-[50vw] h-[50vh] absolute top-[10%] left-1/3 hidden lg:block">
                        <Projectmain />
                    </div>
                    <div className="right w-full md:w-[100%] h-[45vh] md:h-[40vh] lg:h-[50vh] flex flex-col items-center md:items-center lg:items-end justify-between px-5 py-2">
                        <img className="w-10 md:w-16" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg" alt="" />
                        <p className="w-full md:w-[85%] text-[4vw] md:text-[3vw] lg:text-[1.1vw] text-center md:text-right select-none">
                            Refokus is a forward-thinking web agency that combines <strong>Web Design</strong>, <strong>Webflow Development, and Creative Development</strong> to create cool websites that help brands position themselves as market leaders.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero

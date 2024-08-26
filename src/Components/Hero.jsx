import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="w-full px-3 overflow-hidden">
                <div className="max-w-screen-xl h-[75vh] md:h-[85vh] mx-auto px-4 flex flex-col md:flex-row items-end justify-between">
                    <div className="left w-full md:w-[45%] mb-10 md:mb-0">
                        <h1 className="text-[12vw] md:text-[9vw] leading-[10vw] md:leading-[8vw] select-none">
                            WE <br /> MAKE <br /> COOL <br /> WEBSITES
                        </h1>
                    </div>
                    <div className="right w-full md:w-[45%] h-[45vh] md:h-[65vh] flex flex-col items-center md:items-end justify-between px-5 py-2">
                        <img className="w-10 md:w-5" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg" alt="" />
                        <p className="w-full md:w-[85%] text-[4vw] md:text-[1.3vw] text-center md:text-right select-none">
                            Refokus is a forward-thinking web agency that combines <strong>Web Design</strong>, <strong>Webflow Development, and Creative Development</strong> to create cool websites that help brands position themselves as market leaders.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero

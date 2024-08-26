import React, { useState } from 'react'
import Showcase from './Showcase';
import Button2 from './Button2';


const Showcases = () => {

    const showcasesData = [
        {
            title: "ARQITEL",
            img1: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp",
            img2: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp",
            video: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
            pheading: "Concept, Design, 3D, Webflow+WebGL Development",
            ppara: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            bgco: "bg-indigo-600",
        },
        {
            title: "MAN/V",
            img1: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png",
            img2: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
            video: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
            pheading: "Branding, Design, Webflow+GSAP Development",
            ppara: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            bgco: "bg-green-500",

        },
    ];


    const [isHovered, setIsHovered] = useState(false);


    return (
        <>
            <div className="w-full flex flex-col items-center gap-8">
                <div className="max-w-screen-xl mx-auto py-20 flex flex-col gap-10">
                    {showcasesData.map((show, index) => {
                        return <Showcase key={index} showdata={show} />
                    })}

                </div>
                <Button2 text='View More Works'/>
                
            </div>
        </>
    )
}

export default Showcases
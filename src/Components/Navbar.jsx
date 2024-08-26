import React from 'react'
import { PiArrowBendDownRight } from "react-icons/pi";
import Button from './Button';


const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="max-w-screen-xl mx-auto py-6  flex items-center justify-between px-4 sticky">
                    <div className="container flex items-center gap-24 w-1/2 ">
                        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                        <div className="navlinks hidden md:flex items-center gap-14">
                            {["Home", "Work", "About", "News"].map((item, index) =>
                                <a href="#" className='flex items-center gap-1 text-sm  font-light' key={index} to="/" >
                                    {index === 0 ? (<span style={{ boxShadow: "1 0 0.2em #00FF19" }} className='inline-block w-1 h-1 bg-green-500  rounded-full'></span>) : (<span className='inline-block w-1 h-1  rounded-full'></span>)}
                                    {item}
                                </a>)}
                        </div>
                    </div>
                    <Button/>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
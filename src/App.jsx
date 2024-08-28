'use client';
import React, { useEffect, useRef } from 'react'
import locomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Marques from './Components/Marques';
import Showcases from './Components/Showcases';
import Stripes from './Components/Stripes';
import Event from './Components/Event';
import Eventcards from './Components/Eventcards';
import Carosales from './Components/Carosales';
import Cards from './Components/Cards';
import Footer from './Components/Footer';


const App = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    
    return () => {
      scroll.destroy();
    };
  }, []);


  return (
    <>
      <div className="w-full bg-[#000000] text-white" ref={scrollRef}>
        <Navbar/>
        <Hero/>
        <Marques/>
        <Showcases/>
        <Stripes/>
        <Event/>
        <Eventcards/>
        <Carosales/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App
import React, { useEffect } from 'react'
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

const Showcase = ({ showdata }) => {

  const { title, img1, img2, video, bgco, pheading, ppara } = showdata;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };



  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        animate={controls}
        variants={containerVariants}
        transition={{ duration: 0.5, staggerChildren: 0.5, repeat: true }}
        className="w-full overflow-hidden"
      >
        <div className={`max-w-screen-xl mx-auto ${bgco} p-4 md:p-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-5 rounded-3xl`}>
          <div className="left-cont w-full md:w-1/2 h-auto md:h-[100vh] flex flex-col gap-6">
            <h1 className="text-xl md:text-2xl tracking-widest">{title}</h1>
            <div className="image-container w-full h-full flex flex-col justify-between items-end gap-4">
              <div className="img1-cnt w-full md:w-[55%] h-48 md:h-auto rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover object-center" src={img1} alt="" />
              </div>
              <div className="img2-cnt w-full h-48 md:h-auto rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover object-center" src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="left-right w-full md:w-1/2 h-auto md:h-[100vh] flex flex-col justify-between items-start gap-4">
            <div className="video-cnt w-full h-48 md:h-auto rounded-xl overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop src={video}></video>
            </div>
            <div className="p-heading">
              <p className="p-text text-[4vw] md:text-[1vw]">{pheading}</p>
            </div>
            <p className="p-para text-base md:text-lg">{ppara}</p>
            <Button text="Visit Website" />
          </div>
        </div>
      </motion.div>


    </>
  )
}

export default Showcase
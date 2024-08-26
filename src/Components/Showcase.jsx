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
        className="w-full overflow-hidden">
        <div className={`max-w-screen-xl  mx-auto ${bgco}  p-8 flex items-end justify-between gap-5 rounded-3xl`}>
          <div className="left-cont w-1/2 h-[100vh] flex flex-col gap-6">
            <h1 className='text-2xl tracking-widest'>{title}</h1>
            <div className="image-container w-full h-full flex flex-col justify-between items-end">
              <div className="img1-cnt w-[55%] rounded-xl overflow-hidden">
                <img className='w-full h-full object-cover object-center' src={img1} alt="" />
              </div>
              <div className="img2-cnt w-full rounded-xl overflow-hidden">
                <img className='w-full h-full object-cover object-center' src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="left-right w-1/2 h-[100vh] flex flex-col justify-between items-start">
            <div className="video-cnt w-full rounded-xl overflow-hidden">
              <video autoPlay muted loop src={video}></video>
            </div>
            <div className="p-heading">
              <p className="p-text text-[1vw]">{pheading}</p>
            </div>
            <p className="p-para text-lg">{ppara}</p>
            <Button text="Visit Website " />
          </div>
        </div>
      </motion.div>

    </>
  )
}

export default Showcase
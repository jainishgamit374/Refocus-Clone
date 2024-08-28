import React from "react";
import { motion } from "framer-motion";


const Stripe2 = ({ data, direction }) => {

  return (
    <>
      <div className="flex gap-0 w-full overflow-hidden">
      <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0  items-center py-10 md:py-7 " >
          {data.map((url, i) => (
            <div key={i} className={`border  border-l-0 border-zinc-600 w-[80vw] md:w-[30vw] lg-w-[30vw] flex shrink-0 items-center justify-center px-8 py-6`} >
               <h1 className="text-xl font-semibold">{url.text}</h1>
            </div>
          ))}
        </motion.div>
`      <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0  items-center  py-10 md:py-7 " >
          {data.map((url, i) => (
            <div key={i} className={`border  border-l-0 border-zinc-600 w-[80vw] md:w-[30vw] lg-w-[30vw] flex shrink-0 items-center justify-center px-8 py-6`} >
               <h1 className="text-xl font-semibold">{url.text}</h1>
            </div>
          ))}
        </motion.div>`
      </div>
    </>
  );
};

export default Stripe2;
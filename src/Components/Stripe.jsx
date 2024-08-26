import React from "react";
import { motion } from "framer-motion";

const Stripe = ({ data, direction }) => {
  // console.log(data.url)

  return (
    <>
      <div className="flex gap-0 w-full overflow-hidden">
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0  items-center  py-7" >
          {data.map((url, i) => (
            <div key={i} className={`border  border-l-0 border-zinc-600 w-[22vw] flex shrink-0 items-center justify-between px-8 py-6`} >
              <img className="h-[80%]" src={url.url} />
              <span className="font-semibold text-lg">{url.number}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center  py-7" >
          {data.map((url, i) => (
            <div key={i} className={`border  border-l-0 border-zinc-600 w-[22vw] flex shrink-0 items-center justify-between px-8 py-6`} >
              <img className="h-[80%]" src={url.url} />
              <span className="font-semibold text-lg">{url.number}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </>
  );
};

export default Stripe;

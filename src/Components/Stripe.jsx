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
          className="flex flex-shrink-0 items-center py-4 md:py-7"
        >
          {data.map((url, i) => (
            <div key={i} className="border border-l-0 border-zinc-600 w-[65vw] sm:w-[40vw] md:w-[22vw] h-[20vw] sm:h-[5vw] md:h-[7vw] flex shrink-0 items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              <img className="h-[50%] sm:h-[60%] md:h-[80%]" src={url.url} />
              <span className="font-semibold text-sm sm:text-base md:text-lg">{url.number}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center py-4 md:py-7"
        >
          {data.map((url, i) => (
            <div key={i} className="border border-l-0 border-zinc-600 w-[65vw] sm:w-[40vw] md:w-[22vw] h-[20vw] sm:h-[5vw] md:h-[7vw] flex shrink-0 items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              <img className="h-[50%] sm:h-[60%] md:h-[80%]" src={url.url} />
              <span className="font-semibold text-sm sm:text-base md:text-lg">{url.number}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </>
  );
};

export default Stripe;

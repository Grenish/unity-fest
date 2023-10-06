import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { dominos, royalEnfield } from "../assets/sponsores";

const Sponsores = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}
        className="text-5xl font-des text-center font-semibold px-9 sm:px-16 mb-4"
      >
        Our Sponsores
      </motion.div>
      <motion.div className="flex items-center space-x-10">
        <marquee>
          <img src={dominos} alt="Dominos Logo" className="w-[250px]" />
          <img
            src={royalEnfield}
            alt="Royal Enfield Logo"
            className="w-[250px]"
          />
        </marquee>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Sponsores, "sponsores");

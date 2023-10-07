import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  dominos,
  royalEnfield,
  cocacola,
  ibm,
  microsoft,
  gcp,
  tesla,
} from "../assets/sponsores";
import Marquee from "react-fast-marquee";
import Typed from "typed.js";

const Sponsors = () => {
  return (
    <div className="w-full p-2 mt-10 relative">
      <motion.div
        variants={textVariant()}
        className="text-5xl font-des text-center font-semibold px-9 sm:px-16 mb-4 text-primaryFont"
      >
        Our Sponsors
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center font-pop text-sm md:text-base lg:text-lg xl:text-xl text-primaryFont"
      >
        We are grateful to our sponsors for their support and contribution to
        Unity Fest 2023.
      </motion.p>
      <div className="flex flex-col items-center space-x-10 w-full overflow-hidden relative p-2 mt-5">
        <Marquee className="w-full relative" speed={20}>
          {[dominos, royalEnfield, cocacola, ibm, microsoft, gcp, tesla].map(
            (src, index) => (
              <div className="inline-block" key={index}>
                <img
                  src={src}
                  alt="Sponsor Logo"
                  className="w-24 h-24 md:w-48 md:h-48 mr-10 object-contain"
                />
              </div>
            )
          )}
        </Marquee>
        <div className="w-[50px] sm:w-[200px] h-[200px] absolute bg-gradient-to-r from-[#10151D] z-[10] left-[-35px]"></div>
        <div className="w-[50px] sm:w-[200px] h-[200px] absolute bg-gradient-to-l from-[#10151D] z-[10] right-0"></div>
      </div>
    </div>
  );
};

export default SectionWrapper(Sponsors, "sponsors");

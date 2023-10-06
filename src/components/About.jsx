import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Typed from "typed.js";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(document.querySelector(".aboutAnim"));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const typed = new Typed(".aboutAnim", {
        strings: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate distinctio, consectetur blanditiis aut hic qui perferendis optio voluptatum dolore, iure quas, corporis nihil dicta tempore sapiente tempora itaque nobis! Cumque, eum et?",
        ],
        typeSpeed: 10,
        loop: false,
        showCursor: false,
        startDelay: 150,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [isVisible]);

  return (
    <div className="h-screen px-3 sm:px-28">
      <div className="flex justify-center items-center flex-col">
        <motion.div
          variants={textVariant()}
          className="text-5xl bg-gradient-to-tr from-rose-500 to-indigo-500 bg-clip-text font-des font-extrabold text-transparent"
        >
          Who Are We?
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="font-code mt-5 text-justify aboutAnim sm:text-center"
        ></motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

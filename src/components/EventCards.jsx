import React from "react";
import { esports, coding, photography, cultural, art, sports } from "../assets";
import { baffle } from "baffle";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const EventCards = () => {
  const eventsName = [
    {
      id: 1,
      name: "E-Sports",
      imgUrl: esports,
      desc: "Show the audience, who's the real king",
    },
    {
      id: 2,
      name: "Coding",
      imgUrl: coding,
      desc: "Show the audience, who's the real king",
    },
    {
      id: 3,
      name: "Photography",
      imgUrl: photography,
      desc: "Show the audience, who's the real king",
    },
    {
      id: 4,
      name: "Cultural",
      imgUrl: cultural,
      desc: "Show the audience, who's the real king",
    },
    {
      id: 5,
      name: "Art",
      imgUrl: art,
      desc: "Show the audience, who's the real king",
    },
    {
      id: 6,
      name: "Sports",
      imgUrl: sports,
      desc: "Show the audience, who's the real king",
    },
  ];

  return (
    <div className="relative">
      <div className="">
        <motion.div
          variants={textVariant()}
          className="text-5xl font-des font-semibold px-9 sm:px-16 mb-4 text-primaryFont"
        >
          Events
        </motion.div>
        <motion.div
          className="flex flex-wrap"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {eventsName.map((events, index) => (
            <motion.div
              key={events.id}
              className="custom-hover relative transition ease-in-out max-w-md mx-auto bg-blackPrimary rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
              variants={fadeIn("up", "spring", index * 0.1, 0.15)}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={events.imgUrl}
                    alt={events.name}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {events.name}
                  </div>
                  <p className="mt-2 text-gray-500">{events.desc}</p>
                  <button className="bg-gray-500 p-2 rounded-xl">
                    Know More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* <div className="absolute w-[290px] h-[100px] rounded-full bg-[#6783a8] top-[-90px] right-[-200px] z-[-9] blur-[200px] hidden md:block"></div> */}
      {/* <div className="absolute w-[290px] h-[100px] rounded-full bg-[#6783a8] top-[-90px] left-[-200px] z-[-9] blur-[200px] hidden md:block"></div> */}
    </div>
  );
};

export default SectionWrapper(EventCards, "events");

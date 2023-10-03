import React from "react";
import { esports, coding, photography, cultural, art, sports } from "../assets";

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
    <div className="px-9 sm:px-36">
      <div className="text-5xl font-pop font-semibold">Events</div>
      <div className="flex flex-wrap">
        {eventsName.map((events) => (
          <div
            key={events.id}
            className="custom-hover transition ease-in-out max-w-md mx-auto bg-blackPrimary rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={events.imgUrl}
                  alt="esports game"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {events.name}
                </div>
                <p className="mt-2 text-gray-500">{events.desc}</p>
                <button className="bg-gray-500 p-2 rounded-xl">Know More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;

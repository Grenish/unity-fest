import React, { useState } from "react";
import { Link } from "react-router-dom";
import vite from "../assets/vite.svg";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";
import Baffle from "baffle";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const links = [
    { name: "About", id: "about" },
    { name: "Events", id: "events" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact us", id: "contact" },
  ];

  const toggleMenu = () => {
    setOpen(!isOpen);

    if (!isOpen) {
      const b = Baffle(".baffle", {
        characters:
          "!@#$%^&*()_+-=[]{};'<./>?QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm",
        speed: 100,
      });

      setTimeout(() => {
        b.start().reveal(800);
      }, 200);
    }
  };

  return (
    <header className="px-3 xl:px-28 absolute w-full z-[99999]">
      <nav className="flex items-center justify-between p-5 bg-transparent">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={vite} alt="Logo" className="w-16" />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Menu"
          >
            {isOpen ? <UilMultiply /> : <UilBars />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`fixed right-0 top-0 h-full text-primaryFont bg-[#19262c7e] backdrop-blur-md z-20 w-3/4 md:w-1/2 lg:w-1/3 transform ease-in-out transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:static md:h-auto md:bg-transparent`}
          aria-hidden={!isOpen}
        >
          <div className="py-10 px-5 flex flex-col items-center justify-center space-y-5 md:flex-row md:items-center md:justify-end md:space-y-0 md:py-0 md:px-10">
            {links.map((link, i) => (
              <li
                key={i}
                className=" list-none mr-5 hover:text-white text-[18px] cursor-pointer"
              >
                <a href={`#${link.id}`} onClick={toggleMenu}>
                  {link.name}
                </a>
              </li>
            ))}
            
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 opacity-30 z-10 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-30 bg-black" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden={!isOpen}
      />
    </header>
  );
};

export default Navbar;

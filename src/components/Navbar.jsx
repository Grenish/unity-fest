import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vite from "../assets/vite.svg";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";
import Baffle from "baffle";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const links = ["About", "Events", "Gallery", "Contact us"];

  useEffect(() => {
    if (isOpen) {
      const b = Baffle(".baffle", {
        characters: "!@#$%^&*()_+-=[]{};';<./>?QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm",
        speed: 100,
      });
      
      setTimeout(() => {
        b.start().reveal(800);
      }, 200);
    }
  }, [isOpen]);

  return (
    <header className="px-3 sm:px-28">
      <nav className="flex items-center justify-between p-5 bg-transparent">
        <div>
          <Link to="/">
            <img src={vite} alt="Logo" className="w-16" />
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <UilMultiply /> : <UilBars />}
          </button>
        </div>

        <div
          className={`fixed right-0 top-0 h-full bg-blackPrimary z-20 w-3/4 md:w-1/2 lg:w-1/3 transform ease-in-out transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:static md:h-auto md:bg-transparent`}
          aria-hidden={!isOpen}
        >
          <div className="py-5 px-5 md:flex md:items-center md:justify-end md:space-x-8 md:py-0 md:px-10">
            {links.map((link, i) => (
              <Link
                key={i}
                to={`/${link.toLowerCase()}`}
                className="baffle block text-lg w-full text-center my-16 sm:my-0 hover:underline transition ease-in-out md:text-md md:w-auto"
                aria-label={link}
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 opacity-30 z-10 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-30 bg-black" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!isOpen}
      />
    </header>
  );
};

export default Navbar;
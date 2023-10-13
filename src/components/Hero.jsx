import React, { useEffect, useRef } from "react";
import Baffle from "baffle";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    let letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    letters = letters.split("");

    // Columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Drops
    const drops = Array.from({ length: columns }, () => 1);

    // Draw function
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#fff";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    const interval = setInterval(draw, 33);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return <canvas ref={canvasRef} />;
};

const Hero = () => {
  const elRef = useRef(null);

  useEffect(() => {
    const phrases = [
      "Show Your Creativity",
      "Flex Your Gaming Skills",
      "Explore Your Imagination",
      "Open To The World Of Anime",
    ];

    const b = Baffle(elRef.current);

    let counter = 0;

    const animateNextPhrase = () => {
      b.text((text) => phrases[counter])
        .start()
        .reveal(1500, 0);

      counter = (counter + 1) % phrases.length;

      setTimeout(animateNextPhrase, 5000);
    };

    animateNextPhrase();

    return () => {
      b.reveal(0);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen relative overflow-x-hidden">
      <div className="text-primaryFont font-des font-medium text-xl sm:text-xl md:text-6xl lg:text-2xl">
        Unity Fest Lets You
      </div>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex items-start justify-center mt-5 h-[20vh]">
        <div
          id="scrambleText"
          ref={elRef}
          className="text-5xl text-center sm:px-0 px-5 sm:text-3xl md:text-4xl lg:text-6xl font-bold font-code scramble-text bg-clip-text text-transparent bg-gradient-to-tl from-indigo-500 to-rose-500"
        ></div>
      </div>
      <div className="absolute w-[950px] h-[200px] top-[-368px] z-[-9] bg-[#6783a8] blur-[200px] rounded-full sm:w-[750px] md:w-[550px] lg:w-[350px] sm:top-[-300px] md:top-[-250px] lg:top-[-200px]"></div>
      <div className="absolute top-[-100px] z-[-9999] opacity-10 h-screen overflow-x-hidden">
        <MatrixRain />
      </div>
    </div>
  );
};

export default Hero;

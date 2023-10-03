import React, { useEffect, useRef } from "react";
import Baffle from "baffle";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initializing the canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    // Setting up the columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Setting up the drops
    const drops = Array.from({ length: columns }, () => 1);

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#fff';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    const interval = setInterval(draw, 33);

    // Clean up interval on component unmount
    return () => clearInterval(interval);

  }, []);
  return <canvas ref={canvasRef}></canvas>;
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
    <div className="flex flex-col items-center justify-center w-full h-[100vh] sm:h-screen relative">
      <div className="text-primaryFont font-pop font-medium text-xl">
        Unity Fest Lets You
      </div>
      <div className="w-[70%] flex items-start justify-center mt-5 h-[20vh]">
        <div
          id="scrambleText"
          ref={elRef}
          className="text-5xl sm:text-6xl font-bold text-primaryFont scramble-text"
        ></div>
      </div>
      <div className="absolute w-[950px] h-[200px] top-[-368px] z-[-9] bg-[#6783a8] blur-[200px] rounded-full"></div>
      <div className="absolute top-[-100px] z-[-9999] opacity-10 overflow-x-hidden">
        <MatrixRain  />
      </div>
    </div>
  );
};

export default Hero;

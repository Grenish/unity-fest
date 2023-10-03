import React, { useEffect, useRef } from 'react';

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
    let letters = '!@#$%^&*()-=_+[]{};<>/.,';
    letters = letters.split('');

    // Setting up the columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Setting up the drops
    const drops = Array.from({ length: columns }, () => 1);

    // Setting up the draw function
    function draw() {
      // Clear the canvas to make it transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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

  return (
    <canvas ref={canvasRef}></canvas>
  );
};

export default MatrixRain;

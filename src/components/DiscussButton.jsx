import React from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const DiscussButton = () => {
  // Initialize Typed.js on component mount
  React.useEffect(() => {
    const options = {
      strings: ["Join the discussion"],
      typeSpeed: 50,
      loop: false,
      showCursor: false,
    };
    const typed = new Typed(".typed", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg font-medium text-gray-700">
        <span className="typed"></span>
      </p>
      <Link
        to="/discussion"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Discuss
      </Link>
    </div>
  );
};

export default DiscussButton;

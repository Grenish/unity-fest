import React from "react";
import { EventCards, Events, Footer, Hero, MatrixRain, Navbar, } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <MatrixRain /> */}
      <EventCards />
      <Footer />
    </div>
  );
};

export default App;

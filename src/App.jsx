import React from "react";
import {
  About,
  EventCards,
  Events,
  Footer,
  Hero,
  Navbar,
  Sponsors,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <EventCards />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import {
  About,
  EventCards,
  Events,
  Footer,
  Hero,
  Navbar,
  Sponsores,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <EventCards />
      <Sponsores />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import {
  About,
  EventCards,
  Events,
  Footer,
  Hero,
  Navbar,
  Sponsors,
  Discussion,
  DiscussButton,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/*" element={
          <>
            <Hero />
            <About />
            <EventCards />
            <Sponsors />
            <DiscussButton />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;
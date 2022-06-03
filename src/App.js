// App.js

import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Home />
      <Nav />
      <Services />
      <Amenities />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default App;

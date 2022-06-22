// App.js

import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import content from "./utils/content";

const App = () => {
  return (
    <div className="w-screen">
      <Home />
      <Nav />
      <Services content={content.services} />
      <Amenities content={content.amenities} />
      <Testimonials />
      <FAQ content={content.faq} />
      <Contact content={content.contact} />
    </div>
  );
};

export default App;

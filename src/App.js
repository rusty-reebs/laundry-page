// App.js

import React from "react";
import { MantineProvider } from "@mantine/core";
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
    <MantineProvider
      theme={{
        fontFamily: ["Karla", "sans-serif"],
      }}
    >
      <div className="font-Karla w-screen flex flex-col lg:flex-col pt-4">
        <Nav />
        <Home />
        <Services content={content.services} />
        <Amenities content={content.amenities} />
        <Testimonials />
        <FAQ
          contentFirst={content.faqFirst}
          contentSecond={content.faqSecond}
        />
        <Contact content={content.contact} />
      </div>
    </MantineProvider>
  );
};

export default App;

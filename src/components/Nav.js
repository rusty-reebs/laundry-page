// Nav.js

import { ReactComponent as HomeIcon } from "../img/home.svg";
import logo from "../img/bubbles-suds.png";
import React from "react";

const navigate = (location) => {
  let where = document
    .getElementById(location)
    .scrollIntoView({ behavior: "smooth" });
  return where;
};

const Nav = () => {
  return (
    <div className="flex flex-row text-xl justify-center gap-x-12 items-center">
      <a href="/#" className="">
        <HomeIcon className="h-6" />
      </a>
      <a href="/#">Services</a>
      <a href="/#">Amenities</a>
      <img src={logo} alt="logo" className="h-44 w-44" />
      <a href="/#">Testimonials</a>
      <p onClick={() => navigate("faq")}>FAQ</p>
      <a href="/#">Contact</a>
    </div>
  );
};

export default Nav;

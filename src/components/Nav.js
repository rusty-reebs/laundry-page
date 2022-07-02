// Nav.js

import { ReactComponent as HomeIcon } from "../img/home.svg";
import logo from "../img/bubbles-suds.png";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-row justify-center gap-x-12">
      <a href="/#" className="">
        <HomeIcon className="h-4" />
      </a>
      <a href="/#">Services</a>
      <a href="/#">Amenities</a>
      <img src={logo} alt="logo" className="h-52 w-52 rounded-full" />
      <a href="/#">Testimonials</a>
      <a href="/#">FAQ</a>
      <a href="/#">Contact</a>
    </div>
  );
};

export default Nav;

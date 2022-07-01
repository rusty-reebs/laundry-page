// Nav.js

import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-row justify-center absolute top-10 left-1/2">
      <a href="/#" className="">
        Home
      </a>
      <a href="/#">Services</a>
      <a href="/#">Amenities</a>
      <p>Logo</p>
      <a href="/#">Testimonials</a>
      <a href="/#">FAQ</a>
      <a href="/#">Contact</a>
    </div>
  );
};

export default Nav;

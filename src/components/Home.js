// Home.js

import React from "react";
// import laundryPhoto from "../img/laundry-photo.jpg";
const laundryPhoto = require("../img/laundry-photo3.jpg");

const Home = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${laundryPhoto})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p>MODERN AND UPSCALE LAUNDROMAT</p>
      <h1>A Better Place to do Your Laundry</h1>
      <button className="bg-gray-200 p-2">VIEW LOCATION</button>
    </div>
  );
};

export default Home;

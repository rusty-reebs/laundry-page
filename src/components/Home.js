// Home.js

import React from "react";
import laundryPhoto from "../img/laundry-photo.jpg";

const Home = () => {
  return (
    <div className="h-screen flex">
      <div className="relative w-full mx-auto">
        <img
          src={laundryPhoto}
          alt="cover"
          className="h-1/2 absolute inset-0 mx-auto rounded-lg"
        />
        {/* <p>MODERN AND UPSCALE LAUNDROMAT</p> */}
        {/* <h1>A Better Place to do Your Laundry</h1> */}
        {/* <button className="bg-gray-200 p-2">VIEW LOCATION</button> */}
      </div>
    </div>
  );
};

export default Home;

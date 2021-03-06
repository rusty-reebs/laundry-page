// Home.js

import React from "react";
import laundryPhoto from "../img/laundry-photo.jpg";

const Home = () => {
  return (
    <div className="h-screen flex flex-row justify-around pt-4">
      <div>
        <p>MODERN AND UPSCALE LAUNDROMAT</p>
        <h1>A Better Place to do Your Laundry</h1>
        <h2>May be the best place to do your laundry, actually.</h2>
        <h2>Come visit us today!</h2>
        <h3>We have everything for your laundry needs!</h3>
        <h3>Serving the region proudly since 1987.</h3>
        <button className="bg-gray-200 p-2">VIEW LOCATION</button>
      </div>
      <img src={laundryPhoto} alt="cover" className="h-2/3 rounded-lg" />
    </div>
  );
};

export default Home;

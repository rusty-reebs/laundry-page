// Home.js

import React from "react";
import laundryPhoto from "../img/laundry-photo.jpg";

const Home = () => {
  return (
    <div className="h-screen flex flex-row justify-around pt-4">
      <div>
        <p>MODERN AND UPSCALE LAUNDROMAT</p>
        <h1>A Better Place to do Your Laundry</h1>
        <h2>Come check us out!</h2>
        <h2>You'll be glad you did!</h2>
        <h2>Serving the local area since 1999</h2>
        <h2>Ask us about our weekly specials!</h2>
        <h2>We value your loyalty, thank you for being our customer.</h2>
        <h2>Super upscale environment.</h2>
        <h2>Coming Soon - espresso machine!</h2>
        <button className="bg-gray-200 p-2">VIEW LOCATION</button>
      </div>
      <img src={laundryPhoto} alt="cover" className="h-2/3 rounded-lg" />
    </div>
  );
};

export default Home;

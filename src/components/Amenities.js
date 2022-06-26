// Amenities.js

import React from "react";

const Amenities = ({ content }) => {
  return (
    <div className="flex flex-col">
      <h1 className="py-5 mx-auto text-3xl">
        We are on a mission to change the laundromat experience.
      </h1>
      <p className="mx-auto text-xl">Here's what we offer:</p>
      <div className="flex flex-col max-w-full mt-10 lg:h-screen lg:grid lg:grid-cols-5 lg:gap-x-8 lg:mx-52">
        {content.map((amenity) => (
          <div key={amenity.title} className="flex flex-col w-32">
            <img src={amenity.icon} alt="icon" height={30} />
            <p>{amenity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

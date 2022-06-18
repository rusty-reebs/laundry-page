// Amenities.js

import React from "react";

const Amenities = ({ content }) => {
  return (
    <div className="flex flex-col">
      <h1 className="py-5">
        We are on a mission to change the laundromat experience
      </h1>
      <p>Here's what we offer:</p>
      <div className="flex flex-col lg:flex-row">
        {content.map((amenity) => (
          <div key={amenity.title} className="flex flex-col">
            <img src={amenity.icon} alt="icon" height={30} />
            <p>{amenity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

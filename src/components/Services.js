// Services.js

import React from "react";

const Services = ({ content }) => {
  return (
    <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
      {content.map((service) => (
        <div key={service.title} className="flex flex-col">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;

// Services.js

import React from "react";

const Services = ({ content }) => {
  return (
    <div className="flex flex-col gap-y-5 mx-5 text-center lg:flex-row lg:gap-x-20 lg:mx-32">
      {content.map((service) => (
        <div key={service.title} className="flex flex-col">
          <img src={service.icon} alt={service.title} className="mx-24" />
          <h3 className="text-lg font-bold pb-4 pt-12">
            {service.title.toUpperCase()}
          </h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;

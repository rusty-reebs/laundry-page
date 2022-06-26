// Services.js

import React from "react";

const Services = ({ content }) => {
  return (
    <div className="flex flex-col gap-y-5 max-w-full text-center lg:h-screen lg:flex-row lg:gap-x-20 lg:mx-32 lg:pt-52">
      {content.map((service) => (
        <div key={service.title} className="flex flex-col">
          <h3 className="text-lg font-bold pb-4">
            {service.title.toUpperCase()}
          </h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;

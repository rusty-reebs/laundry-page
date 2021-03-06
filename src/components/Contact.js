// Contact.js

import React from "react";
import { ReactComponent as FacebookIcon } from "../img/facebook.svg";

const Contact = ({ content }) => {
  console.log(content);
  return (
    <div className="flex flex-col mt-10 pt-40 pb-20 lg:flex-row lg:mx-52">
      <div className="flex flex-col">
        <h1 className="text-3xl">Contact</h1>
        <FacebookIcon className="h-10 w-10 my-4" />
        <div className="flex flex-col gap-y-20">
          {content.map(({ title, detail, icon }) => (
            <div key={title} className="flex flex-col">
              <h2 className="font-bold">
                <img src={icon} className="inline h-5 mr-2" alt={title} />

                {title.toUpperCase()}
              </h2>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

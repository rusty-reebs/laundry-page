// Contact.js

import React from "react";
import { ReactComponent as Facebook } from "../img/facebook.svg";

const Contact = ({ content }) => {
  console.log(content);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col">
        <h1>Contact</h1>
        <Facebook className="h-8 w-8" />
        {content.map(({ title, detail }) => (
          <div key={title}>
            <h2>{title}</h2>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

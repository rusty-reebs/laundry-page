// FAQcard.js

import React, { useState } from "react";

const FAQcard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`py-5 ${isOpen ? "border-b border-slate-400" : null} `}>
        <h2 className="font-bold" onClick={() => handleClick()}>
          <span className="text-red-500 mr-2">+</span>
          {title}
        </h2>
      </div>
      <p className={` transition-all ease-out ${!isOpen ? "hidden" : "block"}`}>
        {content}
      </p>
    </div>
  );
};

export default FAQcard;

// FAQ.js

import React from "react";
import FAQcard from "./FAQcard";

const FAQ = ({ content }) => {
  return (
    <div className="flex flex-col">
      <h1 className="mx-auto">Frequently Asked Questions</h1>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:mx-40">
        {content.map((faq) => (
          <FAQcard key={faq.title} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

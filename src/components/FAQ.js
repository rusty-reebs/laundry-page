// FAQ.js

import React from "react";
import FAQcard from "./FAQcard";

const FAQ = ({ content }) => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="flex">
        <div>
          {content.map((faq) => {
            return (
              <FAQcard
                key={faq.title}
                title={faq.title}
                content={faq.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

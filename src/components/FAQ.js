// FAQ.js

import { Accordion } from "@mantine/core";
import React from "react";
// import FAQcard from "./FAQcard";

const FAQ = ({ content }) => {
  return (
    <div className="flex flex-col">
      <h1 className="mx-auto text-3xl">Frequently Asked Questions</h1>
      <div className="flex flex-col mt-10 lg:grid lg:grid-cols-2 lg:mx-40">
        <Accordion multiple>
          {content.map((faq) => (
            <Accordion.Item key={faq.title} label={faq.title}>
              {faq.content}
            </Accordion.Item>
            // <FAQcard key={faq.title} title={faq.title} content={faq.content} />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

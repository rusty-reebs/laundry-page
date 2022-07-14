// FAQ.js

import { Accordion } from "@mantine/core";
import React from "react";
// import FAQcard from "./FAQcard";

const FAQ = ({ contentFirst, contentSecond }) => {
  return (
    <div id="faq" className="flex flex-col pt-40">
      <h1 className="mx-auto text-3xl">Frequently Asked Questions</h1>
      <div className="flex flex-col lg:flex-row lg:gap-x-10 lg:justify-between mt-10 lg:mx-52">
        <div className="w-1/2">
          <Accordion multiple className="flex flex-col">
            {contentFirst.map((faq) => (
              <Accordion.Item key={faq.title} label={faq.title}>
                {faq.content}
              </Accordion.Item>
              // <FAQcard key={faq.title} title={faq.title} content={faq.content} />
            ))}
          </Accordion>
        </div>
        <div className="w-1/2">
          <Accordion multiple className="flex flex-col">
            {contentSecond.map((faq) => (
              <Accordion.Item key={faq.title} label={faq.title}>
                {faq.content}
              </Accordion.Item>
              // <FAQcard key={faq.title} title={faq.title} content={faq.content} />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

// FAQcard.js

import { Accordion } from "@mantine/core";

const FAQcard = ({ title, content }) => {
  return (
    <Accordion>
      <Accordion.Item label={title}>{content}</Accordion.Item>
    </Accordion>
  );
};

export default FAQcard;

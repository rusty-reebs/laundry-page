// FAQcard.js

import { Accordion } from "@mantine/core";

const FAQcard = ({ title, content }) => {
  return <Accordion.Item label={title}>{content}</Accordion.Item>;
};

export default FAQcard;

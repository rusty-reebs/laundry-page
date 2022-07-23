// content.js

import wifi from "../img/wifi.svg";
import snowflake from "../img/snowflake.svg";
import chair from "../img/chair.svg";
import table from "../img/table.svg";
import charging from "../img/phone-charging.svg";
import tv from "../img/tv.svg";
import washingMachine from "../img/washing-machine.svg";
import ipad from "../img/tablet.svg";
import security from "../img/security-camera.svg";
import attendant from "../img/attendant.svg";
import shirt from "../img/shirt.svg";
import cards from "../img/credit-cards-svgrepo-com.svg";
import pin from "../img/pin.svg";
import schedule from "../img/schedule.svg";
import email from "../img/email.svg";

const fascardLink = () => {
  let a = document.createElement("a");
  let link = document.createTextNode("here");
  a.appendChild(link);
  a.title = "Hi";
  a.href = "rustys.dev";
  return a;
};

const content = {
  services: [
    {
      title: "Coin and Coinless Machines",
      description:
        "Our environmentally friendly Huebsch&copy; machines use less water and dry faster so you are done fast! You can pay with coins, the Upstate Laundromat loyalty card, Visa, or Mastercard.",
      icon: washingMachine,
    },
    {
      title: "Fluff and Fold Service Available",
      description:
        "Don’t waste valuable time doing your own laundry. Let us handle it for you! Offered 7 days a week, same day or next day available. We will notify you when your laundry is done via text.",
      icon: shirt,
    },
    {
      title: "Loyalty Discounts",
      description:
        "Use your Upstate Laundromat personal loyalty card to earn special discounts over time. Make sure to register your card by clicking here or by downloading the Fascard Mobile app.",
      icon: cards,
    },
  ],
  faqFirst: [
    {
      title: "What are your hours?",
      content: "We're open 7 days/week from 7am to 10pm.",
    },
    {
      title: "What is the last wash time?",
      content:
        "The posted time for starting the last wash is 9:00 PM. This typically allows enough time for our customers to finish washing, drying and folding their clothes by 10:00 PM.",
    },
    {
      title: "Is coin-less laundry really coin-less?",
      content:
        "All the machines work with a laundry card – you don’t need to bring quarters. You can use cash, VISA or MasterCard to add value to a laundry card that may be re-loaded as you use up the balance on your card.",
    },
    {
      title: "How do I get a new laundry card?",
      content:
        "You may get a laundry card by visiting the VTM (Value Transfer Machine) at the front of the store. Follow the simple steps to get a laundry card and add value by inserting cash, VISA or MasterCard. You can add money to the card as needed. Our friendly staff is always available to assist you if you need help with your transaction.",
    },
    {
      title: "How do I add money to the card?",
      content: `You can add money to your card using cash, VISA or MasterCard at the VTM (Value Transfer Machine) next to the office. Please see the attendant if you need any assistance with your transaction. You can also register your card with Fascard by clicking
          ${fascardLink()} or by downloading the Fascard Mobile App with Apple & Android)`,
    },
    {
      title: "Is my laundry card reusable/reloadable?",
      content:
        "Yes, the card will retain any unused balance for future visits and can be reused and reloaded as often as needed. You can reload your Fascard by clicking *here* or download their app in your devices app store.",
    },
  ],
  faqSecond: [
    {
      title: "How do I register my laundry card?",
      content:
        "Registration can be completed by downloading the FasCard Mobile App, or by *clicking here* Registration is very important because it allows you to receive dicounts throughout the year and if you lose your laundry card we can trasnfer the money to a new one.",
    },
    {
      title: "Why is the front load washer often a better choice?",
      content:
        "Top load washers are smaller capacity and less efficient. Front washers provide a better wash and are gentler on your garments due to their tumbling action. They need less soap (for example a double load front load washer will need about 1 1/2 load’s worth of soap). Front load washers are better value and more environmentally friendly.",
    },
    {
      title: "Can I wash my pillows in a front load washer?",
      content:
        "You can – but you need to aware of a few things. Pillows can sometimes be damaged during wash and may lose stuffing or lose it’s shape. Please use your best judgment.",
    },
    {
      title: "Can I wash a down comforter?",
      content:
        "Comforters with down fillings take longer to dry. You may need to air dry them at home to get the moisture out. Please take care to dry them completely to prevent mildew.",
    },
    {
      title: "How do I add time to the dryers?",
      content:
        "You can add any amount of time to the dryer by inserting your laundry card into the dryer until the desired drying time is reached. Then press the START button. Please remember to take the card with you when you are done adding time to the dryer.",
    },
    {
      title: "What items should NOT be put in the dryer?",
      content:
        "Anything with rubber should NOT be placed into the dryers on any temperature other than “air dry”. This includes all shoes and rugs with rubber backing, or any other item that is made with any rubber or plastic materials. They may become damaged and misshapen after being placed in the dryer. Items containing rubber or plastic are not permitted in the dryers for this reason.",
    },
  ],
  contact: [
    {
      title: "Location",
      detail: "2600 Anderson Road\\n Greenville, SC 29611",
      icon: pin,
    },
    {
      title: "Hours",
      detail: "Open every day from 8am to 10 pm\\n (Last wash at 9pm)",
      icon: schedule,
    },
    {
      title: "Email",
      detail: "info@upstatelaundromat.com",
      icon: email,
    },
  ],
  amenities: [
    {
      title: "Free Wi-Fi",
      icon: wifi,
    },
    {
      title: "Air Conditioning",
      icon: snowflake,
    },
    {
      title: "Comfortable Seating",
      icon: chair,
    },
    {
      title: "Cafe Table",
      icon: table,
    },
    {
      title: "Charging Stations",
      icon: charging,
    },
    {
      title: '5 HD 55" TVs',
      icon: tv,
    },
    {
      title: "35 Hi Tech Machines",
      icon: washingMachine,
    },
    {
      title: "Kids Zone with iPads",
      icon: ipad,
    },
    {
      title: "On Site Attendant",
      icon: attendant,
    },
    {
      title: "Security Cameras",
      icon: security,
    },
  ],
};

export default content;

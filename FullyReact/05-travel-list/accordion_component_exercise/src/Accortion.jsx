import React, { useState } from "react";

function Accordion() {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      <ul>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              number={index}
              title={faq.title}
              curOpen={curOpen}
              setIsOpen={setIsOpen}
            >
              {faq.text}
            </AccordionItem>
          );
        })}
      </ul>
    </div>
  );
}

function AccordionItem({ number, title, children, curOpen, setIsOpen }) {
  const isOpen = curOpen === number;

  function handleClick() {
    setIsOpen(number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default Accordion;

import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    // Toggle FAQ state
    if (openFAQ === index) {
      setOpenFAQ(null); // Close if already open
    } else {
      setOpenFAQ(index); // Open the clicked one
    }
  };

  const faqList = [
    {
      question: "Is it really unlimited?",
      answer: "Yes, it is truly unlimited!",
    },
    {
      question: "What is included in the rental service?",
      answer: "Our rental service includes insurance, 24/7 support, and more.",
    },
    {
      question: "How do I make a reservation?",
      answer: "You can make a reservation through our website or mobile app.",
    },
    {
      question: "What are the payment options available?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Is there a minimum rental period?",
      answer: "The minimum rental period is one day.",
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer:
        "Yes, you can modify or cancel your reservation up to 24 hours before the rental start time.",
    },
    {
      question: "Are there any additional fees?",
      answer:
        "There are no hidden fees, but optional extras like GPS may incur additional charges.",
    },
    {
      question: "Is insurance included in the rental?",
      answer: "Yes, basic insurance is included in all rentals.",
    },
    {
      question: "What should I do in case of an accident or breakdown?",
      answer:
        "Contact our support team immediately. We will assist you with the next steps.",
    },
    {
      question: "Are there any mileage restrictions?",
      answer:
        "No, there are no mileage restrictions on our rentals.   Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum, commodi. Nemo voluptatibus obcaecati minima quas deleniti odit nesciunt beatae optio, aliquam accusamus  saepe et vitae sequi minus, itaque ea voluptas!",
    },
    {
      question: "How do I return the vehicle?",
      answer:
        "You can return the vehicle to any of our designated  return locations.",
    },
  ];

  return (
    <section id="faqs" className="pt-6 lg:pt-0 pb-4 lg:pb-20 bg-gray-100">
      <div className="w-full flex flex-col gap-4 lg:gap-6 items-center justify-center lg:p-10 xl:pb-16">
        <div>
          <h2 className="text-3xl text-center font-bold mb-8">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-[90%] lg:w-[50%] border border-black h-auto rounded-xl">
          {faqList.map((faq, index) => (
            <div className="" key={index}>
              <div
                className={`flex flex-col justify-between items-center py-3 px-5 cursor-pointer ${
                  index !== faqList.length - 1 ? "border-b border-black" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="w-full flex justify-between items-center">
                  <p className="text-xl font-semibold">{faq.question}</p>
                   <div className="relative flex items-center justify-center">
                  <div
                    className={`absolute transition-opacity duration-500 ${openFAQ === index ? "opacity-100" : "opacity-0"} ${openFAQ === index ? "transform rotate-0" : "transform rotate-45"
                      }`}
                  >
                    <MdRemoveCircleOutline size={25} />
                  </div>
                  <div
                    className={`absolute transition-opacity duration-500 ${openFAQ !== index ? "opacity-100" : "opacity-0"} ${openFAQ !== index ? "transform rotate-0" : "transform rotate-45"
                      }`}
                  >
                    <MdAddCircleOutline size={25} />
                  </div>
                </div>
                </div>
                <div
                  className={`overflow-hidden transition-all w-full duration-700 ${
                    openFAQ === index
                      ? "max-h-[200px] "
                      : "max-h-0"
                  }`}
                >
                  <div className=" py-3 w-full pt-3">
                    <p className="text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

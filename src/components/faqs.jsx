import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Faqs = () => {
  const accordionData = [
    {
      question: "What iPhone models do you offer accessories for?",
      answer:
        "We provide accessories for a wide range of iPhone models, including the latest ones like iPhone 15, iPhone 15 Pro, and more. Our inventory covers products compatible with various iPhone generations, ensuring you find the perfect match for your device.",
    },
    {
      question: "Are your iPhone accessories genuine and of high quality?",
      answer:
        "Yes, all our iPhone products are genuine and crafted with the utmost quality. We source our accessories from reputable manufacturers to ensure they meet the highest standards. You can trust our products to enhance and protect your iPhone effectively.",
    },
    {
      question: "How can I track my order after purchase?",
      answer:
        "Once your order is processed, you will receive a confirmation email with a tracking number and a link to monitor the shipment's progress. You can use this information to stay updated on the status of your order until it reaches your doorstep.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we provide international shipping to many countries. During the checkout process, you can select your location, and shipping options and costs will be calculated accordingly. Please note that international shipping times may vary based on your location.",
    },
    {
      question: "What is your return policy for iPhone accessories?",
      answer:
        "We offer a hassle-free return policy within 30 days of the purchase date. If you're not satisfied with your iPhone accessory for any reason, you can initiate a return through our website. Please refer to our Returns and Exchanges page for detailed instructions and eligibility criteria.",
    },
    {
      question: "Are your payment transactions secure?",
      answer:
        "Yes, we prioritize the security of our customers' information. Our website uses industry-standard encryption protocols to secure all payment transactions. You can shop with confidence, knowing that your personal and financial details are protected throughout the purchasing process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="container mx-auto px-5">
        <div id="faqs">
          <div className="text-indigo-800 text-3xl font-bold text-center pt-10 md:pt-20">
            Frequently Asked Questions
          </div>
          <div className=" flex flex-col lg:items-center py-5">
            <div className=" ">
              {accordionData.map((item, index) => (
                <div key={index}>
                  <div className="py-2">
                    <div
                      className="question rounded-lg text-sm flex items-center justify-between md:text-lg shadow bg-white border p-3 cursor-pointer w-full lg:w-[60rem]"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="font-bold">{item.question}</div>
                      <ChevronDownIcon
                        className={`w-5 h-5 transform transition-all duration-500 ease-in-out ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`answer shadow-2xl shadow-zinc-700 overflow-hidden transition-all duration-700 ease-out  ${
                        openIndex === index ? "max-h-[150px]" : "max-h-0"
                      }`}
                    >
                      <div className="rounded-lg   flex items-center text-sm md:text-lg bg-white border w-full lg:w-[60rem] p-3">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

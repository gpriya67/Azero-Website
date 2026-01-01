import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiMinusCircle } from "react-icons/fi";

const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is monthly. You can cancel anytime and you won’t be charged for the next cycle.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes! You can upgrade or downgrade your plan anytime from your account settings.",
  },

  {
    question: "What is your cancellation policy?",
    answer:
      "Yes! You can upgrade or downgrade your plan anytime from your account settings.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes! You can upgrade or downgrade your plan anytime from your account settings.",
  },
  {
    question: "How does billing work?",
    answer:
      "Yes! You can upgrade or downgrade your plan anytime from your account settings.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Yes! You can upgrade or downgrade your plan anytime from your account settings.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="w-full px-4 md:px-20 mt-10">
      <h2 className="font-clash font-medium text-3xl md:text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <p className="font-aileron text-base md:text-lg text-gray-500 text-center mt-5">
        Everything you need to know about the product and services.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="group w-full md:w-[768px] bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(251,30,1,0.25)] hover:border-[#FB1E01]/40 mx-auto"
          >
            <div
              className="flex justify-between items-center p-5 cursor-pointer transition-colors duration-300"
              onClick={() => toggle(index)}
            >
              <h4 className="text-[20px] text-black font-clash font-normal transition-all duration-300  ">
                {item.question}
              </h4>

              <span className="text-2xl text-black">
                {openIndex === index ? (
                  <FiMinusCircle />
                ) : (
                  <AiOutlinePlusCircle />
                )}
              </span>
            </div>

            <div
              className={`px-5 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              <p className="font-aileron font-normal text-[20px] text-[#667085] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;

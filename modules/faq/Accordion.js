"use client";
import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white border-t">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;

"use client";
import Accordion from "./Accordion";
import { faqTexts } from "./texts";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-1 px-12">
        <div className="right flex-1">
          <h1 className="text-2xl font-bold mb-4">FAQ</h1>
          <h1 className="text-xl font-semibold mb-2">{faqTexts.title}</h1>
          <h2 className="text-lg text-gray-600">{faqTexts.subtitle}</h2>
        </div>

        <div className="left flex-1 flex flex-col gap-4">
          <Accordion question={faqTexts.question} answer={faqTexts.answer} />
          <Accordion question={faqTexts.question} answer={faqTexts.answer} />
          <Accordion question={faqTexts.question} answer={faqTexts.answer} />
          <Accordion question={faqTexts.question} answer={faqTexts.answer} />
          <Accordion question={faqTexts.question} answer={faqTexts.answer} />
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;

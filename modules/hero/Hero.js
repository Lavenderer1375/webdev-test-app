"use client";

import { motion } from "framer-motion";
import { icons } from "@/constants/icons";
import { heroTexts } from "./texts";

const Hero = () => {
  return (
    <main className="w-full px-6 md:px-16 py-16 md:py-24 bg-white">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col-reverse items-center justify-center gap-12 md:flex-row md:justify-between"
      >
        <div className="w-full md:w-1/2 text-center md:text-right">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            {heroTexts.title}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3 md:mb-4 leading-snug">
            {heroTexts.subtitle}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            {heroTexts.pTag}
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#7A3DE2] text-white font-semibold py-2.5 px-6 rounded-xl hover:bg-[#6E32D2] transition-all duration-300 text-sm sm:text-base">
              {heroTexts.button}
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-start">
          <div className="w-64 sm:w-72 md:w-96">{icons.hero}</div>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;

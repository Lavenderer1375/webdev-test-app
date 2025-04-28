import React from "react";

const SlideCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center text-center w-[220px] h-[200px] md:w-[282px] md:h-[226px] border rounded-lg border-gray-200 bg-white p-4">
      <span className="pt-4">{icon}</span>
      <h1 className="text-xsm font-bold py-2 sm:text-base">{title}</h1>
      <p className="px-4 sm:text-xs">{text}</p>
    </div>
  );
};

export default SlideCard;

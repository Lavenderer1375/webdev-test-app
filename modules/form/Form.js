"use client";
import { useState } from "react";
import { formTexts } from "./text";
import { icons } from "@/constants/icons";
import { motion } from "framer-motion";

const Form = () => {
  const [textInput, setTextInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [checkboxStates, setCheckboxStates] = useState({});
  const [textareaInput, setTextareaInput] = useState("");

  // Validation errors
  const [errors, setErrors] = useState({
    textInput: "",
    emailInput: "",
    numberInput: "",
    checkboxGroup: "",
  });

  const checkboxOptions = [
    formTexts.formQ4A1,
    formTexts.formQ4A2,
    formTexts.formQ4A3,
    formTexts.formQ4A4,
    formTexts.formQ4A5,
  ];

  const handleCheckboxChange = (option) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {
      textInput: "",
      emailInput: "",
      numberInput: "",
      checkboxGroup: "",
    };

    if (!textInput.trim()) {
      newErrors.textInput = formTexts.errorMessage;
    }
    if (!emailInput.trim()) {
      newErrors.emailInput = formTexts.errorMessage;
    }
    if (!numberInput.trim()) {
      newErrors.numberInput = formTexts.errorMessage;
    }
    const isAnyCheckboxChecked = Object.values(checkboxStates).some(Boolean);
    if (!isAnyCheckboxChecked) {
      newErrors.checkboxGroup = formTexts.errorMessage2;
    }

    // If any error exists, prevent submit
    if (
      newErrors.textInput ||
      newErrors.emailInput ||
      newErrors.numberInput ||
      newErrors.checkboxGroup
    ) {
      setErrors(newErrors);
      return;
    }

    // If no errors, submit
    setErrors({
      textInput: "",
      emailInput: "",
      numberInput: "",
      checkboxGroup: "",
    });

    setTimeout(() => {
      console.log("Form submitted");
      setTextInput("");
      setEmailInput("");
      setNumberInput("");
      setCheckboxStates({});
      setTextareaInput("");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-center items-center border-1 border-gray-100 pt-8 pb-10 px-4 md:px-16 m-10 rounded-xl shadow-xl">
        <h1 className="font-bold text-xl mb-8">{formTexts.title}</h1>
        <h2 className="font-semibold text-lg mb-40">{formTexts.subtitle}</h2>
        <div className="form w-full">
          <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
            <div className="flex flex-row items-center justify-center gap-2">
              {/* Text input */}
              <label className="flex flex-col gap-2 w-full">
                <span className="text-sm font-medium">{formTexts.formQ1}</span>
                <div className="relative flex items-center">
                  <div className="absolute">{icons["profileCircleRed"]}</div>
                  <input
                    type="text"
                    className="w-full border-none ring-1 ring-gray-100 rounded-lg p-2 pr-8"
                    placeholder={formTexts.formQ1Placeholder}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                  />
                </div>
                {errors.textInput && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.textInput}
                  </p>
                )}
              </label>

              {/* Email input */}
              <label className="flex flex-col gap-2 w-full">
                <span className="text-sm font-medium">{formTexts.formQ2}</span>
                <div className="relative flex items-center">
                  <div className="absolute">{icons["message"]}</div>
                  <input
                    type="email"
                    className="w-full border-none ring-1 ring-gray-100 rounded-lg p-2 pr-8"
                    placeholder={formTexts.formQ2Placeholder}
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>
                {errors.emailInput && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.emailInput}
                  </p>
                )}
              </label>

              {/* Number input */}
              <label className="flex flex-col gap-2 w-full">
                <span className="text-sm font-medium">{formTexts.formQ3}</span>
                <div className="relative flex items-center">
                  <div className="absolute">{icons["call"]}</div>
                  <input
                    type="text"
                    className="w-full border-none ring-1 ring-gray-100 rounded-lg p-2 pr-8"
                    placeholder={formTexts.formQ3Placeholder}
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                  />
                </div>
                {errors.numberInput && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.numberInput}
                  </p>
                )}
              </label>
            </div>

            {/* Checkbox group */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium pb-7">
                {formTexts.formQ4}
              </span>
              <div className="flex flex-wrap gap-4">
                {checkboxOptions.map((option, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="hidden peer"
                      checked={checkboxStates[option] || false}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    <div className="h-5 w-5 rounded-full bg-gray-100 peer-checked:bg-violet-600 transition duration-200"></div>
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
              {errors.checkboxGroup && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.checkboxGroup}
                </p>
              )}
            </div>

            {/* Textarea */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">{formTexts.formQ5}</span>
              <textarea
                className="border border-gray-200 rounded-md p-2"
                placeholder={formTexts.formQ5Placeholder}
                rows={4}
                value={textareaInput}
                onChange={(e) => setTextareaInput(e.target.value)}
              />
            </label>

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="mt-4 w-1/4 rounded-full bg-[#303030] hover:bg-gray-950 text-white font-semibold py-2 px-4"
              >
                {formTexts.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Form;

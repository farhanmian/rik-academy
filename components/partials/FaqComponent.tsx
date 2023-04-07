import React, { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";
import AddIcon from "../icons/AddIcon";
import MinusIcon from "../icons/MinusIcon";

const FaqComponent: React.FC<{
  frequentAskedQuestions: {
    question: string;
    answer: string;
  }[];
}> = ({ frequentAskedQuestions }) => {
  const [frequentQuestions, setFrequentQuestions] = useState<number[]>([]);

  const toggleFrequentQuestionsHandler = (i: number) => {
    if (frequentQuestions.includes(i)) {
      // remove i from state
      const updated = frequentQuestions.filter((item) => item !== i);
      setFrequentQuestions(updated);
    } else {
      // add i to state
      setFrequentQuestions((prev) => (prev.length > 0 ? [...prev, i] : [i]));
    }
  };

  return (
    <>
      {frequentAskedQuestions.map((item, i) => {
        const isOpen = frequentQuestions.includes(i);
        return (
          <div
            key={i}
            className={`transition-all ${isOpen ? "drop-shadow-md" : ""}`}
          >
            <ButtonPrimary
              className="rounded-none min-w-full text-start py-5 max-sm:px-3 hover:drop-shadow-sm flex items-center gap-x-4 sm:gap-x-9"
              onClick={() => {
                toggleFrequentQuestionsHandler(i);
              }}
            >
              {isOpen ? <MinusIcon /> : <AddIcon />}
              {item.question}
            </ButtonPrimary>
            <div
              className={`w-full bg-lightBlue px-5 transition-all ${
                isOpen ? "h-max py-6" : "h-0 overflow-hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FaqComponent;

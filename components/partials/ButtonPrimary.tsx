import React from "react";

const ButtonPrimary: React.FC<{
  children: string | JSX.Element | React.ReactNode;
  className?: string;
  onClick?: () => void;
  buttonType?: "white" | "blue";
}> = ({ children, className: classes, onClick, buttonType = "blue" }) => {
  return (
    <button
      className={`py-2.5 px-8 rounded hover:drop-shadow-lg active:drop-shadow-sm transition-all ${
        buttonType === "white"
          ? "bg-white border border-bluePrimary text-bluePrimary hover:bg-bluePrimary hover:text-white"
          : "bg-bluePrimary text-white"
      } ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

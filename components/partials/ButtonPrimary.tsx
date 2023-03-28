import React from "react";

const ButtonPrimary: React.FC<{
  children: string | JSX.Element | React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className: classes, onClick }) => {
  return (
    <button
      className={`w-max py-2.5 px-8 rounded bg-bluePrimary text-white hover:drop-shadow-lg active:drop-shadow-sm transition-all ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

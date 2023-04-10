import React from "react";

const Card: React.FC<{
  children: JSX.Element | React.ReactNode;
  classes?: string;
}> = ({ children, classes }) => {
  return (
    <div
      className={`shadow-md ${classes}  rounded-xl max-w-[443px] border-stoke  relative border-[1px]   `}
    >
      {children}
    </div>
  );
};

export default Card;

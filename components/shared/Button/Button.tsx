import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
  classes?: string;
  px?: string;
  py?: string;
  bgColor?: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={` rounded-sm border-stoke  border-[1px] ${
        props.py ? props.py : "py-[14px] "
      } ${props.px ? props.px : "px-12"} ${
        props.bgColor ? props.bgColor : "bg-white hover:bg-bluePrimary  "
      } ${props.classes}`}
    >
      {props.children}
    </button>
  );
};

export default Button;

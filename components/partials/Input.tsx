import React from "react";

const Input: React.FC<{
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  value?: string | number;
  type?: string;
  disabled?: boolean;
}> = ({ onChange, className: classes, placeholder, value, type, disabled }) => {
  return (
    <input
      onChange={onChange}
      className={`px-5 py-2.5 rounded focus:outline-none outline-bluePrimary border border-bluePrimary  ${classes}`}
      placeholder={placeholder}
      value={value}
      type={type}
      disabled={disabled}
    />
  );
};

export default Input;

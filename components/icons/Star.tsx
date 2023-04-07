import React from "react";

const Star: React.FC<{ color?: "gold" | "white" | ""; className?: string }> = ({
  color,
  className: classes,
}) => {
  const startColor = color && color === "gold" ? "#E7C62F" : "#fff";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
        fill={startColor ? startColor : "#fff"}
      />
    </svg>
  );
};

export default Star;

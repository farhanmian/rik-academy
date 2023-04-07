import React from "react";

const HalfStar: React.FC<{ className?: string }> = ({ className: classes }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M5.99935 8.28958L7.83685 9.4125L7.3556 7.3125L8.97435 5.9125L6.84518 5.72292L5.99935 3.73958V8.28958ZM2.39727 11.8333L3.34518 7.73542L0.166016 4.97917L4.36602 4.61458L5.99935 0.75L7.63268 4.61458L11.8327 4.97917L8.65352 7.73542L9.60143 11.8333L5.99935 9.66042L2.39727 11.8333Z"
        fill="#E7C62F"
      />
    </svg>
  );
};

export default HalfStar;

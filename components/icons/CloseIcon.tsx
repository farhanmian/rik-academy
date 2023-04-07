import React from "react";

const CloseIcon: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7049 7.70501L16.2949 6.29501L11.9999 10.59L7.70492 6.29501L6.29492 7.70501L10.5899 12L6.29492 16.295L7.70492 17.705L11.9999 13.41L16.2949 17.705L17.7049 16.295L13.4099 12L17.7049 7.70501Z"
        fill={color ? color : "#292D2E"}
      />
    </svg>
  );
};

export default CloseIcon;

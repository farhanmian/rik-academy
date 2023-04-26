import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "and become a blockchain expert from anywhere with our online courses.",
        ],
        autoStart: true,
        loop: true,
        delay: 10,
        deleteSpeed: 30,
      }}
    />
  );
}
export default Type;

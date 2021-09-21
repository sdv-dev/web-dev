import React from "react";

function WhiteTopWave() {
  return (
    <svg
    className="w-full relative z-0"
      xmlns="http://www.w3.org/2000/svg"
      // width="1440"
      // height="176"
      fill="none"
      viewBox="0 0 1440 176"
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(0)">
          <stop offset="0%" stopColor="#03B0F2" />
          <stop offset="100%" stopColor="#01E0C9" />
        </linearGradient>
      </defs>
      <path
        fill="url(#myGradient)"
        fillRule="evenodd"
        d="M1441 .883H-1v174.412c240.333-53.154 480.667-79.731 721-79.731 240.333 0 480.67 26.577 721 79.731V.883z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default WhiteTopWave;

import React from "react";

function WhiteBottomWave(props) {
  return (
    <svg
      className="w-full relative z-0"
      xmlns="http://www.w3.org/2000/svg"
      // width="1440"
      // height="181"
      fill="none"
      viewBox="0 0 1440 181"
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
        d="M1440 180.307H0V.509c240 54.795 480 82.193 720 82.193S1200 55.304 1440 .51v179.798z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default WhiteBottomWave;

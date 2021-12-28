import React from "react";

export default function Delete({ className, stroke, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.16699 4.75H15.8337L14.5828 16.0075C14.5399 16.3949 14.3557 16.7529 14.0653 17.0129C13.7749 17.2729 13.3988 17.4167 13.009 17.4167H5.99166C5.60187 17.4167 5.22577 17.2729 4.93538 17.0129C4.64498 16.7529 4.4607 16.3949 4.41783 16.0075L3.16699 4.75Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.81479 2.49135C5.94285 2.21979 6.14548 1.99023 6.39905 1.82945C6.65262 1.66867 6.94667 1.58331 7.24692 1.58331H11.7531C12.0535 1.58316 12.3477 1.66845 12.6014 1.82924C12.8551 1.99002 13.0579 2.21967 13.186 2.49135L14.25 4.74998H4.75L5.81479 2.49135Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5835 4.75H17.4168"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.91699 8.70831V12.6666"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0835 8.70831V12.6666"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Delete.defaultProps = {
  stroke: "#B5B5B5",
};

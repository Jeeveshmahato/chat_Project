/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Paperclip1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`paperclip-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.1525 10.8995L12.1369 19.9151C10.0866 21.9654 6.76253 21.9654 4.71227 19.9151C2.66202 17.8649 2.66202 14.5407 4.71227 12.4905L13.7279 3.47487C15.0947 2.10804 17.3108 2.10804 18.6776 3.47487C20.0445 4.84171 20.0445 7.05779 18.6776 8.42462L10.0156 17.0867C9.33216 17.7701 8.22412 17.7701 7.5407 17.0867C6.85728 16.4033 6.85728 15.2952 7.5407 14.6118L15.1421 7.01041"
        stroke="#141E0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

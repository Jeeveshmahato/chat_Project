/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Document1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`document-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.6667 10.4167V5.66666C16.6667 4.26653 16.6667 3.56646 16.3942 3.03168C16.1545 2.56128 15.7721 2.17882 15.3016 1.93914C14.7669 1.66666 14.0668 1.66666 12.6667 1.66666H7.33334C5.9332 1.66666 5.23314 1.66666 4.69836 1.93914C4.22795 2.17882 3.8455 2.56128 3.60582 3.03168C3.33334 3.56646 3.33334 4.26653 3.33334 5.66666V14.3333C3.33334 15.7335 3.33334 16.4335 3.60582 16.9683C3.8455 17.4387 4.22795 17.8212 4.69836 18.0608C5.23314 18.3333 5.93317 18.3333 7.33322 18.3333H10.4167M11.6667 9.16666H6.66667M8.33334 12.5H6.66667M13.3333 5.83332H6.66667M12.5 15.8333L15 18.3333M15 18.3333L17.5 15.8333M15 18.3333V13.3333"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

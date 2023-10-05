/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Members = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`members ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18.3333 17.5V15.8333C18.3333 14.2801 17.271 12.9751 15.8333 12.605M12.9167 2.7423C14.1383 3.23679 15 4.43443 15 5.83333C15 7.23224 14.1383 8.42988 12.9167 8.92437M14.1667 17.5C14.1667 15.9469 14.1667 15.1703 13.9129 14.5577C13.5746 13.741 12.9257 13.092 12.1089 12.7537C11.4964 12.5 10.7198 12.5 9.16667 12.5H6.66667C5.11353 12.5 4.33696 12.5 3.72439 12.7537C2.90763 13.092 2.25871 13.741 1.9204 14.5577C1.66667 15.1703 1.66667 15.9469 1.66667 17.5M11.25 5.83333C11.25 7.67428 9.75762 9.16667 7.91667 9.16667C6.07572 9.16667 4.58333 7.67428 4.58333 5.83333C4.58333 3.99238 6.07572 2.5 7.91667 2.5C9.75762 2.5 11.25 3.99238 11.25 5.83333Z"
        stroke="#141E0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

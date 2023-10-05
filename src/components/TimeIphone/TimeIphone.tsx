/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  darkMode: boolean;
  type: "none" | "with-icon" | "blue" | "orange" | "green";
  className: any;
}

export const TimeIphone = ({ darkMode, type, className }: Props): JSX.Element => {
  return (
    <div className={`time-iphone ${type} ${className}`}>
      <div className={`overlap-group-3 type-${type} dark-mode-${darkMode}`}>
        {["blue", "green", "orange"].includes(type) && <div className="time">9:41</div>}

        {type === "none" && <>9:41</>}

        {type === "with-icon" && (
          <>
            <div className="text-wrapper">9:41</div>
            <div className="icon">􀙪</div>
          </>
        )}
      </div>
    </div>
  );
};

TimeIphone.propTypes = {
  darkMode: PropTypes.bool,
  type: PropTypes.oneOf(["none", "with-icon", "blue", "orange", "green"]),
};

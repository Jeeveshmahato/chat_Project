/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  darkMode: "off" | "on";
  className: any;
  overlapGroupClassName: any;
  capacityClassName: any;
  cap: string;
  wifi: string;
  cellularConnection: string;
}

export const CellularWifi = ({
  darkMode,
  className,
  overlapGroupClassName,
  capacityClassName,
  cap = "/img/cap-2.svg",
  wifi = "/img/wifi-2.svg",
  cellularConnection = "/img/cellular-connection-2.svg",
}: Props): JSX.Element => {
  return (
    <div className={`cellular-wifi ${className}`}>
      <div className="battery">
        <div className={`overlap-group ${darkMode} ${overlapGroupClassName}`}>
          <div className={`capacity ${capacityClassName}`} />
        </div>
        <img className="cap" alt="Cap" src={darkMode === "on" ? "/img/cap-1.svg" : cap} />
      </div>
      <img className="wifi" alt="Wifi" src={darkMode === "on" ? "/img/wifi-1.svg" : wifi} />
      <img
        className="cellular-connection"
        alt="Cellular connection"
        src={darkMode === "on" ? "/img/cellular-connection-1.svg" : cellularConnection}
      />
    </div>
  );
};

CellularWifi.propTypes = {
  darkMode: PropTypes.oneOf(["off", "on"]),
  cap: PropTypes.string,
  wifi: PropTypes.string,
  cellularConnection: PropTypes.string,
};

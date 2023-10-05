import { CellularWifi } from ".";

export default {
  title: "Components/CellularWifi",
  component: CellularWifi,
  argTypes: {
    darkMode: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: "off",
    className: {},
    overlapGroupClassName: {},
    capacityClassName: {},
    cap: "/img/cap-2.svg",
    wifi: "/img/wifi-2.svg",
    cellularConnection: "/img/cellular-connection-2.svg",
  },
};

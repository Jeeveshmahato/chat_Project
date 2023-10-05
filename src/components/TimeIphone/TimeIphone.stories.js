import { TimeIphone } from ".";

export default {
  title: "Components/TimeIphone",
  component: TimeIphone,
  argTypes: {
    type: {
      options: ["none", "with-icon", "blue", "orange", "green"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: true,
    type: "none",
    className: {},
  },
};

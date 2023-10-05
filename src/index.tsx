import React from "react";
import ReactDOMClient from "react-dom/client";
import { ChatScreenInside } from "./screens/ChatScreenInside";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ChatScreenInside />);

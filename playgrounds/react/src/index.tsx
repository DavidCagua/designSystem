import React from "react";
import ReactDOM from "react-dom";

import { Color, Spacing } from "@ds/react";
import "@ds/scss/lib/Utilities.css";

ReactDOM.render(
  <Color hexCode="#000" width={Spacing.sm} height={Spacing.sm} />,
  document.querySelector("#root")
);

import React from "react";
import { ComponentMeta } from "@storybook/react";
import "@ds/scss/lib/Utilities.css";
import Color from "./Color";

export default {
  title: "Atoms/Color",
  component: Color,
} as ComponentMeta<typeof Color>;
import { text, select } from "@storybook/addon-knobs";

import { Spacing } from "@ds/foundation";
export const Common = () => <Color hexCode="pink" />;
export const CustomDimensions = () => (
  <Color
    hexCode={text("HexCode", "pink")}
    width={select("Width", Object.values(Spacing), "xxl")}
    height={select("Height", Object.values(Spacing), "xxl")}
  />
);

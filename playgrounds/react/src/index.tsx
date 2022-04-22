import React from "react";
import ReactDOM from "react-dom";

import { Margin, Text, Select } from "@ds/react";
import "@ds/scss/lib/Utilities.css";
import "@ds/scss/lib/Text.css";
import "@ds/scss/lib/Margin.css";
import "@ds/scss/lib/Select.css";

ReactDOM.render(
  <div>
    <Margin left space="none">
      <Select options={[{label:"2erw", value:"hoal"},{label:"fdsa", value:"hofdsaal"}]} renderOption={({option})=><p>{option.label}</p>}/>
    </Margin>
  </div>,
  document.querySelector("#root")
);

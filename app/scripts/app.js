import React from "react";
import PDC from "./pdc";
import countries from "./countries.json";

React.render(
  <PDC countries={countries} />,
  document.body
);

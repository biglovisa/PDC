import React from "react";
import PDC from "./pdc";
import countries from "./util/countries.json";

React.render(
  <PDC countries={countries} />,
  document.body
);

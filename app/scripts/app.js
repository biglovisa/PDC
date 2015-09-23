import '../styles/main.css';
import '../styles/c3.css';
import React from "react";
import PDC from "./pdc";
import countries from "./util/countries.json";

React.render(
  <PDC countries={countries} />,
  document.body
);

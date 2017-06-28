import React from "react";
import ReactDOM from "react-dom";
import Template from "./lib/template";

var TemplateDIV = document.getElementById("template");
if (TemplateDIV != null) {
  ReactDOM.render(<Template />, TemplateDIV);
}

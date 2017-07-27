import React from "react";
import ReactDOM from "react-dom";
import Containers from "./containers/main";

var ContainersDIV = document.getElementById("containers");
if (ContainersDIV != null) {
  ReactDOM.render(<Containers />, ContainersDIV);
}

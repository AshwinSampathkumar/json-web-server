import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Api from "./Api";

ReactDOM.render(<App api={Api} />, document.getElementById("root"));


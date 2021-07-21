import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HelloWorold from "./base/HelloWorld";

ReactDOM.render(
	<React.StrictMode>
    {/* <App /> */}
    <HelloWorold />
	</React.StrictMode>,
	document.getElementById("root")
);

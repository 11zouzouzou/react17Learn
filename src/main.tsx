import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HelloWorold from "./base/HelloWorld";

function tick() {
	ReactDOM.render(
		<React.StrictMode>
			{/* <App /> */}
			<HelloWorold />
		</React.StrictMode>,
		document.getElementById("root")
	);
	render();
}
function render() {
	//60帧更新
	requestAnimationFrame(tick);
}
render();

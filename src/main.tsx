import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HelloWorold from "./base/HelloWorld";
import HelloComp from "./components/HelloComp";

function tick() {
	ReactDOM.render(
		<React.StrictMode>
			{/* <App /> */}
			<HelloWorold />
			<HelloComp name="zou" />
			<HelloComp name="lei" />
			<HelloComp />
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

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HelloWorold from "./base/HelloWorld";
import HelloComp from "./components/HelloComp";
import { ClockComp } from "./components/ClockComp";
import { Toggle } from "./components/ToggleComp";
import { ControlComp } from "./components/ControlComp";
import { ListControlComp } from "./components/ListComp";

function tick() {
	ReactDOM.render(
		<React.StrictMode>
			{/* <App /> */}
			<HelloWorold />
			<HelloComp name="zou" />
			<HelloComp name="lei" />
			<HelloComp />
			<ClockComp />
			<Toggle />
			<ControlComp></ControlComp>
			<ListControlComp></ListControlComp>
		</React.StrictMode>,
		document.getElementById("root")
	);
	//全局60帧更新
	// render();
}
function render() {
	requestAnimationFrame(tick);
}
render();

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
import { NameForm } from "./components/FormComp";
import { Calculator } from "./components/temperatureComp";
import { SignUpDialog } from "./components/CombinationComp";
import { AccessibilityControl } from "./components/advancedGuides/AccessibilityComp";
import { BlurExample } from "./components/advancedGuides/BlurDemoComp";
import { CodeSegmentDemo } from "./components/advancedGuides/CodeSegmentComp";
import { ContextApp } from "./components/advancedGuides/context";
import { RefsApp } from "./components/advancedGuides/refs";
import { ControlUpdateComp } from "./components/advancedGuides/ControlUpdateComp";

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
			<NameForm></NameForm>
			<Calculator></Calculator>
			<SignUpDialog></SignUpDialog>
			{/* advanced guide */}
			<AccessibilityControl></AccessibilityControl>
			<BlurExample></BlurExample>
			<CodeSegmentDemo></CodeSegmentDemo>
			<ContextApp></ContextApp>
			<RefsApp></RefsApp>
			<ControlUpdateComp></ControlUpdateComp>
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

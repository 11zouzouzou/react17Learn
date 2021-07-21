import React from "react";
function HelloWorld() {
	const user: UserInfo = {
		firstName: "zou",
		lastName: "lei",
	};
	//UI
	const element = (
		<div>
			<h1>hello react17</h1>
			<p>表达式测试：{formatName(user)}</p>
		</div>
	);
  const reactCreatElement = React.createElement("div", { className: "reactCreatElement" }, "Hello reactCreateElement");
  // if (true) {
  //   return reactCreatElement;
  // }
	return element;

	function formatName(user: UserInfo) {
		return user.firstName + " " + user.lastName;
	}
}

interface UserInfo {
	firstName: string;
	lastName: string;
}

export default HelloWorld;

import React from "react";
class Toggle extends React.Component {
  state: ToggleState;
  constructor(props?: any) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: any) {
    console.log(e); //事件传递
    this.setState((prevState: ToggleState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <h3>事件处理</h3>
        <button onClick={(e) => this.handleClick(e)}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
interface ToggleState {
  isToggleOn: boolean;
}

export { Toggle };

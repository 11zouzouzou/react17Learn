import React from "react";
import { ChildComp } from "./ChildComp";
//<>为外部传入class的声明
class HelloComp extends React.Component<{ name?: string }> {
  public name: string = "privateName";
  constructor(props?: any) {
    super(props);
    if (props && props.name) {
      this.name = props.name;
    }
  }
  render() {
    const component = (
      <div>
        <p>
          我是一个组件{this.name};props:{this.props.name ? this.props.name : this.name}
        </p>
        <ChildComp name={this.name + "Child"} />
      </div>
    );
    return component;
  }
}
export default HelloComp;

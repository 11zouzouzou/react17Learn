import React from "react";
class ChildComp extends React.Component<{ name?: string }> {
  public name: string = "privateChildName";
  constructor(props?: any) {
    super(props);
    if (props && props.name) {
      this.name = props.name;
    }
  }
  render() {
    const component = (
      <div>
        我是一个儿子组件{this.name};props:{this.props.name ? this.props.name : this.name}
      </div>
    );
    return component;
  }
}
export { ChildComp };

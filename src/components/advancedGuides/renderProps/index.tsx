import React from "react";
class Cat extends React.Component<{ mouse: { x: number; y: number } }> {
  render() {
    const mouse = this.props.mouse;
    return <img src="./static/img/basePointTexture.png" style={{ position: "absolute", left: mouse.x, top: mouse.y }} />;
  }
}

class Mouse extends React.Component<{ render: ({ x, y }: { x: number; y: number }) => any }> {
  state: { x: number; y: number };
  constructor(props?: any) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event: any) {
    // console.log(event,event.clientX, event.clientY);
    this.setState({
      x: event.pageX,
      y: event.pageY,
    });
    // event.preventDefault();
    // event.stopPropagation();
  }

  render() {
    return (
      <div style={{ height: "400px" }} onMouseMove={this.handleMouseMove}>
        {/*
          使用 `render`prop 动态决定要渲染的内容，
          而不是给出一个 <Mouse> 渲染结果的静态表示
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  // 定义为实例方法，`this.renderTheCat`始终
  // 当我们在渲染中使用它时，它指的是相同的函数
  renderTheCat(mouse: { x: number; y: number }) {
    return <Cat mouse={mouse} />;
  }
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={this.renderTheCat} />
      </div>
    );
  }
}

export { MouseTracker };

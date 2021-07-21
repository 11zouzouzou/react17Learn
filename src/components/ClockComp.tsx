import React from "react";
class ClockComp extends React.Component {
  state: State;
  private _timerID: number | null;
  constructor(props?: any) {
    super(props);
    //react 内部更新状态
    this._timerID = null;
    this.state = { date: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    //组件挂载调用
    this._timerID = this.update();
  }
  componentWillUnmount() {
    //组件销毁前调用
    if (this._timerID) {
      cancelAnimationFrame(this._timerID);
    }
  }
  tick() {
    //setState可能是异步的
    // this.setState({
    //   date: new Date().toLocaleTimeString(),
    // });
    this.setState((state, props) => ({ date: new Date().toLocaleTimeString() }));
    this._timerID = this.update();
  }

  update(): number {
    return requestAnimationFrame(this.tick.bind(this));
  }
  render() {
    const element = (
      <div>
        <h3>这是个时钟</h3>
        <p>局部时间测试:{this.state.date}</p>
      </div>
    );
    return element;
  }
}
interface State {
  date: string;
}

export { ClockComp };

import React, { Fragment } from "react";
class RouterTest extends React.Component {
  declare props: any; //TODO 后续路由类型
  constructor(props?: any) {
    super(props);
  }
  gotoHelloComp() {
    this.props.history.push("/HelloComp");
  }
  goBack1() {
    this.props.history.goBack();
  }

  goBack2() {
    this.props.history.go(-1);
  }
  render() {
    return (
      <Fragment>
        <p>跳转测试</p>
        {this.props.location.query && this.props.location.query.name && <p>name:{this.props.location.query.name}</p>}
        <button onClick={this.gotoHelloComp.bind(this)}>到helloComp</button>
        <button onClick={() => this.goBack1()}>回退1</button>
        <button onClick={() => this.goBack2()}>回退2</button>
      </Fragment>
    );
  }
}

export { RouterTest };

import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
class RouterParam extends React.Component {
  declare props: any;//TODO 后续路由类型
  constructor(props?:any) {
    super(props);
    console.log(props);
  }
  gotoHelloComp() {
    this.props.history.push('/HelloComp');
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
        <p>传参测试{ this.props.match.params.id}</p>
        <button onClick={() => this.goBack1()} >回退1</button>
        <button onClick={() => this.goBack2()} >回退2</button>
      </Fragment>
    );
  }
}
export default withRouter(RouterParam);

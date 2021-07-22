import React, { Fragment } from "react";
class ControlUpdateComp extends React.Component {
  declare props: any;
  declare state: any;
  constructor(props?: any) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Fragment>
        <h2>控制更新</h2>
        <button color={this.props.color} onClick={() => this.setState((state: any) => ({ count: state.count + 1 }))}>
          Count: {this.state.count}
        </button>
      </Fragment>
    );
  }
}

export { ControlUpdateComp };

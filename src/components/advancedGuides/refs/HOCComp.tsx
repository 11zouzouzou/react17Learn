import React, { Fragment } from "react";
//高阶组件
function logProps(Component: any) {
  class LogProps extends React.Component<{ forwardedRef: any }> {
    componentDidUpdate(prevProps: any) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
  return React.forwardRef((props, ref) => {
    console.log(ref);
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

// function Inputs(props:any) {
//   return (
//     <Fragment>
//       <input type="text" placeholder="HOC" ref={props.ref}></input>
//     </Fragment>
//   );
// }
class Input extends React.Component<{ ref: any }> {
  ref: any;
  constructor(props?:any) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return (
      <Fragment>
        <input type="text" placeholder="HOC" ref={this.ref}></input>
      </Fragment>
    );
  }
}
const HOC = logProps(Input);
export { HOC };

import React, { Fragment } from "react";
import { HOC } from "./HOCComp";
import { CustomTextInput } from "./TextInputComp";
const REF:any = React.createRef();
class RefsApp extends React.Component {
  classhandleSave = () => {
    console.log(REF);//指向当前的DOM节点元素
    console.log(REF.current.ref.current.value);
  };
  classhandleFoucs = () => {
    REF.current.ref.current.focus();
  };
  render() {
    return (
      <Fragment>
        <h2>Ref测试</h2>
        <CustomTextInput></CustomTextInput>
        <HOC ref={REF}></HOC>
        <button onClick={this.classhandleSave}>保存</button>
        <button onClick={this.classhandleFoucs}>聚焦</button>
      </Fragment>
    );
  }
}
export { RefsApp };
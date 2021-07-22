import React from "react";
const TextInput = React.forwardRef((props, ref:any) => (
  <input type="text" placeholder="请输入表名" ref={ref} />
));

class ClassTextInput extends React.Component<{ref:any}>{
  ref: any;
  constructor(props?: any) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return (<input type = "text" placeholder = "类测试" ref = { this.ref } />);
  }
}
class CustomTextInput extends React.Component {
  inputRef: any;
  classText: any;
  constructor(props?: any) {
    super(props);
    this.inputRef = React.createRef();
    this.classText = React.createRef() as any;
  }
  handleSave = () => {
    console.log(this.inputRef.current);//指向当前的DOM节点元素
    console.log(this.inputRef.current.value);
  };
  handleFoucs = () => {
    this.inputRef.current.focus();
  };
  classhandleSave = () => {
    console.log(this.classText.current);//指向当前的DOM节点元素
    console.log(this.classText.current.ref.value);
  };
  classhandleFoucs = () => {
    this.classText.current.ref.current.focus();
  };
  render() {
    return (
      <div>
        <TextInput ref={this.inputRef} />
        <button onClick={this.handleSave}>保存</button>
        <button onClick={this.handleFoucs}>聚焦</button>
        <br></br>
        <ClassTextInput ref={this.classText} />
        <button onClick={this.classhandleSave}>保存</button>
        <button onClick={this.classhandleFoucs}>聚焦</button>
      </div>
    );
  }
}

export { CustomTextInput };
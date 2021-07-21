import React from "react";

class List extends React.Component<{ value: number | string }> {
  render() {
    return <li>{this.props.value}</li>;
  }
}
class ListComp extends React.Component<{ numbers: number[] }> {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) => {
      //key 会传递信息给 React ，但不会传递给组件
      return <List key={number.toString()} value={number}></List>;
    });
    return <ul>{listItems}</ul>;
  }
}

class ListControlComp extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
        <h3>列表渲染</h3>
        <ListComp numbers={numbers}></ListComp>
        <ListComp numbers={numbers}></ListComp>
      </div>
    );
  }
}

export { ListControlComp };

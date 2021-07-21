import React from "react";
interface NameFormState {
  textValue: string;
  messageValue: string;
  selectValue: string;
  isGoing: boolean;
}
class NameForm extends React.Component {
  state: NameFormState;
  constructor(props?: any) {
    super(props);
    this.state = { textValue: "", messageValue: "", selectValue: "grapefruit", isGoing: true };

    this.handleChangeTextValue = this.handleChangeTextValue.bind(this);
    this.handleChangeMessageValue = this.handleChangeMessageValue.bind(this);
    this.handleChangeSelectValue = this.handleChangeSelectValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTextValue(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleChangeMessageValue(event: any) {
    this.setState({ messageValue: event.target.value });
  }

  handleChangeSelectValue(event: any) {
    this.setState({ selectValue: event.target.value });
  }

  handleSubmit(event: any) {
    alert("提交的名字: " + this.state.textValue + ";是否参加：" + this.state.isGoing + "；提交的文章：" + this.state.messageValue + ";选中内容" + this.state.selectValue);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>表单</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            名字:
            <input type="text" name="textValue" value={this.state.textValue} onChange={this.handleChangeTextValue} />
          </label>
          <label>
            参与:
            <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChangeTextValue} />
          </label>
          <label>
            文章:
            <textarea value={this.state.messageValue} onChange={this.handleChangeMessageValue} />
          </label>
          <label>
            选择你喜欢的风味:
            <select value={this.state.selectValue} onChange={this.handleChangeSelectValue}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}
export { NameForm };

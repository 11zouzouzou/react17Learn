import React from "react";
function FancyBorder(props:any) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
function Dialog(props:any) {
  return (
    <FancyBorder color="blue">
      <h3 className="Dialog-title">
        {props.title}
      </h3>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}
class SignUpDialog extends React.Component {
  state: any;
  constructor(props?:any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <div>
        <h2>组合测试</h2>
        <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
      </div>
    );
  }

  handleChange(e:any) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
export { SignUpDialog};
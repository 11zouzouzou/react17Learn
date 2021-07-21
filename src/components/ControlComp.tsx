import React from "react";
class ControlComp extends React.Component {
  state: ControlState;
  constructor(props: any) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <h3>条件渲染</h3>
        <h4>点击改变渲染组件</h4>
        {button}
        <Greeting isLoggedIn={isLoggedIn} />
        <h4>运算符&&</h4>
        <p>{isLoggedIn && <h6>{JSON.stringify(this.state)}</h6>}</p>
        <h4>三目运算符</h4>
        {isLoggedIn ? <p>{JSON.stringify(this.state)}</p> : <p>{"非" + JSON.stringify(this.state)}</p>}
        <h4>阻止组件渲染</h4>
        <WarningBanner warn={!isLoggedIn}></WarningBanner>
      </div>
    );
  }
}

interface ControlState {
  isLoggedIn: boolean;
}

class WarningBanner extends React.Component<{ warn?: boolean }> {
  render() {
    if (!this.props.warn) {
      return null;
    }
    return <div className="warning">Warning!</div>;
  }
}

class Greeting extends React.Component<{ isLoggedIn: boolean }> {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
}

class UserGreeting extends React.Component {
  render() {
    return <p>Welcome back!</p>;
  }
}
class GuestGreeting extends React.Component {
  render() {
    return <p>Please sign up.</p>;
  }
}

class LoginButton extends React.Component<{ onClick: () => void }> {
  render() {
    return <button onClick={this.props.onClick}>登录</button>;
  }
}
class LogoutButton extends React.Component<{ onClick: () => void }> {
  render() {
    return <button onClick={(this.props as any).onClick}>注销</button>;
  }
}

export { ControlComp };

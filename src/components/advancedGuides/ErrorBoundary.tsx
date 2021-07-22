import React from "react";
class ErrorBoundary extends React.Component {
  state: { hasError: boolean };
  constructor(props?:any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error:any, errorInfo:any) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children; 
  }
}
export default ErrorBoundary;
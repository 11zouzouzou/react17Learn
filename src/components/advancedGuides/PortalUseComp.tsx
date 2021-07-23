import React from "react";
import ReactDOM from "react-dom";
import "./PortalUseComp.css";
const modalRoot = document.getElementById("modal-root");
// 一个 portal 的典型用例是当父组件有 overflow: hidden 或 z-index 样式时，但你需要子组件能够在视觉上“跳出”其容器
class Modal extends React.Component {
  el: HTMLDivElement;
  constructor(props?: any) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el
    );
  }
}

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class PortalUseComp extends React.Component {
  state: any;
  constructor(props?: any) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        {/* 阻止冒泡 */}
        {/* <div className="modal" onClick={(e) => { console.log('1'); e.preventDefault(); e.stopPropagation();}}> */}
        <div className="modal" >
          <div>With a portal, we can render content into a different part of the DOM, as if it were any other React child.</div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="PortalUseComp" onClick={() => { console.log('modal组件点击未被捕获事件也会冒泡到兄弟root这里');}}>
        <h2>Portal功能测试</h2>
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}
export { PortalUseComp };

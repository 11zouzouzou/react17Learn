import React from "react";
import { ThemeContext } from "./themeContext";

class ThemeButton extends React.Component<{onClick?:(e:any)=>any}> {
  render() {
    let props = this.props;
    let theme = this.context.theme;
    // console.log(props);
    // console.log(theme);
    return (
      <button {...props} style={{ backgroundColor: theme.background }}></button>);
  }
}
ThemeButton.contextType = ThemeContext;

export { ThemeButton };
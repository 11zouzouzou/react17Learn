import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

class ThemeButton extends React.Component<{ onClick?: (e: any) => any }> {
  render() {
    let props = this.props;
    let theme = this.context.theme;
    // console.log(props);
    // console.log(theme);
    return <button {...props} style={{ backgroundColor: theme.background }}></button>;
  }
}

ThemeButton.contextType = ThemeContext;

function ThemeButtonHook(props?: { onClick?: (e: any) => any }) {
  const theme = useContext(ThemeContext);
  return (
    <button {...props} style={{ background: theme.theme.background, color: theme.theme.foreground }}>
      hook context
    </button>
  );
}

export { ThemeButton, ThemeButtonHook };

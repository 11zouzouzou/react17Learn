import React from "react";
import { ThemeContext, UserContext } from "./themeContext";
class ThemeToggleButton extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ name }) => (
          <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
              <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
                函数式多级context:{name}
              </button>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    );
  }
}

export { ThemeToggleButton };

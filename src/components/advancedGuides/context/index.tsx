import React, { Fragment } from "react";
import { ThemeButton } from "./ThemeButton";
import { ThemeContext, themes, UserContext } from "./themeContext";
import { ThemeToggleButton } from "./ThemeTogglerButton";

// 一个使用 ThemedButton 的中间组件
function Toolbar(props: any) {
  return <ThemeButton onClick={props.changeTheme}>改变纽扣主题</ThemeButton>;
}

class ContextApp extends React.Component {
  state: { theme: { foreground: string; background: string }; theme2: { foreground: string; background: string } };
  toggleTheme: () => void;
  toggleTheme2: () => void;
  name: string = "zouContext";
  constructor(props?: any) {
    super(props);
    this.state = {
      theme: themes.light,
      theme2: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state: { theme: { foreground: string; background: string }; theme2: { foreground: string; background: string } }) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
    this.toggleTheme2 = () => {
      this.setState((state: { theme: { foreground: string; background: string }; theme2: { foreground: string; background: string } }) => ({
        theme2: state.theme2 === themes.dark ? themes.light : themes.dark,
      }));
    };
  }
  render() {
    return (
      <Fragment>
        <h2>Context测试</h2>
        {/* 挂载context */}
        <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
          <Toolbar changeTheme={this.toggleTheme}></Toolbar>
        </ThemeContext.Provider>
        <ThemeButton onClick={this.toggleTheme}>无法改变自身</ThemeButton>
        <br></br>
        {/* 挂载多个 */}
        {/* value donnot generate in template */}
        <UserContext.Provider value={{ name: this.name }}>
          <ThemeContext.Provider value={{ theme: this.state.theme2, toggleTheme: this.toggleTheme2 }}>
            <ThemeToggleButton></ThemeToggleButton>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </Fragment>
    );
  }
}

export { ContextApp };

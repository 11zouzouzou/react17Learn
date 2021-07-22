import React, { Fragment } from "react";
class Accessibility extends React.Component {
  render() {
    return (
      <Fragment>
        {/* react 中用htmlFor */}
        <p> 显式标签元素</p>
        <label htmlFor="firstname">显式First name:</label>
        <input type="text" name="name" id="firstname" />

        <input type="checkbox" name="subscribe" id="subscribe" />
        <label htmlFor="subscribe">订阅</label>
        <p> 隐藏标签元素</p>
        <input type="text" name="search" aria-label="Search" />
        <button type="submit">Search</button>
        <input type="text" name="search" aria-labelledby="searchbutton" />
        <button id="searchbutton" type="submit">
          Search2
        </button>
        <input title="Search3" type="text" name="search" />
        <button type="submit">Search3</button>
      </Fragment>
    );
  }
}

class AccessibilityControl extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>无障碍功能</h2>
        <Accessibility></Accessibility>
      </Fragment>
    );
  }
}

export { AccessibilityControl };

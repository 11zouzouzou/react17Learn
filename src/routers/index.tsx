import React from "react";
import { BrowserRouter, HashRouter, Link, Route, Switch } from "react-router-dom";
import HelloComp from "../components/HelloComp";
import RouterParam from "./routersComp/routerParam";
import { RouterTest } from "./routersComp/routerTest";

class TotalRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <h2>路由测试</h2>
        <nav>
          <Link to="/HelloComp">HelloComp</Link>
          <Link to="/routerTest">RouterTest</Link>
          <Link to="/routerTest/1">RouterTest1</Link>
          <Link to="/routerTest/2">RouterTest2</Link>
          <Link to={{ pathname: "/routerTest", query: { name: "3" } } as any}>RouterTest3</Link>
        </nav>
        <Switch>
          {/* exact 精确查找 */}
          <Route
            exact
            path="/routerTest"
            render={(props) => {
              return <RouterTest {...props}></RouterTest>;
            }}
          ></Route>
          <Route exact path="/HelloComp" component={HelloComp}></Route>
          <Route
            exact
            path="/routerTest/:id"
            render={(props) => {
              return <RouterParam {...(props as any)}></RouterParam>;
            }}
          ></Route>
        </Switch>
      </HashRouter>
    );
  }
}
export { TotalRouter };

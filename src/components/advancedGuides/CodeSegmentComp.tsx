import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
const CodeSegmentModuleB = React.lazy(() => import("./codeSegmentModuleB"));
class CodeSegmentDemo extends React.Component {
  handleClick = () => {
    import("./codeSegmentModuleA")
      .then(({ moduleA }) => {
        // Use moduleA
        console.log(moduleA());
      })
      .catch((err) => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <h2>代码分割</h2>
        <button onClick={this.handleClick}>代码分割</button>
        {/* TODO router use */}
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            {/* 懒加载 */}
            <CodeSegmentModuleB></CodeSegmentModuleB>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}
export { CodeSegmentDemo };

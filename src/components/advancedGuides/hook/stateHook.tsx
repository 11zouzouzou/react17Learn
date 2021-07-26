import React, { useEffect, useState } from "react";
function StateHook() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "学习 Hook" }]);

  //组件挂载和更新后执行,使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。
  useEffect(() => {
    const button = document.getElementById("clickHook");
    if (button) {
      button.textContent = "staticHookButton" + count;
    }
    return function clearnUp() {
      if (button) {
        button.textContent = "clear";
      }
      console.log("clear");
    };
  }, [count]); //在count 更改时更新
  //挂载多个useEffect
  useEffect(function persistForm() {
    console.log("useEffect 2");
  });
  return (
    <div>
      <p>点击计数:{count}</p>
      <button
        id="clickHook"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        staticHookButton
      </button>
      <button
        id="clickHook"
        onClick={() => {
          setCount((preCount) => {
            return preCount + 1;
          });
        }}
      >
        staticHookButton函数式更新
      </button>
      <p>水果:{fruit}</p>
      <button
        onClick={() => {
          setFruit("origine");
        }}
      >
        设置origine
      </button>
      <p>ObjectText:{todos[0].text}</p>
      <button
        onClick={() => {
          setTodos([{ text: "change" }]);
        }}
      >
        changeObject
      </button>
    </div>
  );
}

//自定义Hook,调用相同不会共享
function useSelfHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Todo");
  });
  return count;
}

export { StateHook };

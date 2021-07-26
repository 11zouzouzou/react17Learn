import React, { useState } from "react";
function StateHook() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "学习 Hook" }]);
  return (
    <div>
      <p>点击计数:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        staticHookButton
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

export { StateHook };

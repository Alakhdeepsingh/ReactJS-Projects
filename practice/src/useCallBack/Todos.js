import React from "react";
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("systumm");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        console.log(index, todo);
        return <h1 key={index}>{todo}</h1>;
      })}
      <button onClick={addTodo}>Add todos</button>
    </>
  );
};
export default memo(Todos);

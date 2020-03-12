import React from "react";
import "./Todo.css";

const Todo = props => {
  console.log("test", props.thing.yetTodo);
  return (
    <div
      className={`thing${!props.thing.yetTodo ? " yetTodo" : ""}`}
      onClick={e => props.toggleTodo(props.thing.id)}
    >
      <p>{props.thing.name}</p>
    </div>
  );
};

export default Todo;

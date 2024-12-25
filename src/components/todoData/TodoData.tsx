import React from "react";
import './TodoData.css'
import { Itododata } from "../../type";
const TodoData = (props:Itododata) => {
  return (
    <div className="todo-data">
      <div className="todo-data-side">
        <h2>{props.numOfTASK}</h2>
        <h3>Created tasks</h3>
      </div>
      <div className="todo-data-side">
        <h2>{props.ct}</h2>
        <h3>Completed tasks</h3>
      </div>
    </div>
  );
};

export default TodoData;

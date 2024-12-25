import React from "react";
import "./Todo.css";
import AddTodo from "../addTodo/AddTodo.tsx";
import TodoData from "../todoData/TodoData.tsx";
import TodoItem from "../todoItem/TodoItem.tsx";
import { Itask } from "../../type.ts";
import { useState } from "react";

const ItodoItems: Array<Itask> = [];

const Todo = () => {
  const [todoItems, settodoItems] = useState<Itask[]>(ItodoItems);
  const today = new Date();
  const day = today.toLocaleDateString(undefined, { weekday: "long" });
  const date = today.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
  });

  const onSubmit = (newTask: Itask) => {
    console.log(newTask);
    settodoItems([...todoItems, newTask]);
  };

  const removeHandler = (id: string) => {
    console.log("idddd",id);
    const updatedTodos = todoItems.filter((item) => item.id !== id);
    settodoItems(updatedTodos);
    
  };
  const completeHandler=(id:string,value:boolean)=>{
    console.log(id,value);
    const updatedTodos = todoItems.map((item) =>
        item.id === id ? { ...item, isCompleted: value } : item
      );
      settodoItems(updatedTodos);
    
  }
  const cT = todoItems.filter((item) => item.isCompleted).length;
  const numOfTASK = todoItems.length;

  return (
    <div className="todo">
      <div className="todo-date">
        <h1>{day},</h1>
        <h1>{date}</h1>
      </div>
      <AddTodo onSubmit={onSubmit} />
      <TodoData ct={cT} numOfTASK={numOfTASK} />
      <div className="todo-item-container">
        {todoItems.map((todoitem) => (
          <TodoItem
            key={todoitem.id}
            id={todoitem.id}
            tasktext={todoitem.tasktext}
            isCompleted={todoitem.isCompleted}
            urgent={todoitem.urgent}
            removeTask={removeHandler}
            editComplete={completeHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;

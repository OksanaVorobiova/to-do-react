import React from "react";
import { ToDoList } from "./ToDo.styled";

const ToDo = ({ tasks, onDeleteTask }) => (
  <ToDoList>
    {tasks.map(({ id, text, completed }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTask(id)}>Delete</button>
      </li>
    ))}
  </ToDoList>
);

export default ToDo;

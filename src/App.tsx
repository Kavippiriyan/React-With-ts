import React, { useState } from "react";
import './App.css';
import ToDoApp from './components/todolist'
import { Todo } from "./components/model";

const APP: React.FC = () => {
  const [todo, settodo] = useState<string>("")
  const [todos, settodos] = useState<Todo[]>([])
  console.log(todo);

  const Handleadd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      settodos([...todos, { id: Date.now(), todo, isDone: false }])
      settodo("")
    }
  }
  console.log(todos);


  return (
    <div className="App">
      <ToDoApp todo={todo} settodo={settodo} handleadd={Handleadd} />
      {todos.map(value=>(
        <li>{value.todo}</li>
      ))}
    </div>
  );
}

export default APP;


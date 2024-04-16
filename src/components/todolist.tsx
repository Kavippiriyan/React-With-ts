import React, { useState, FC } from "react";
import './todolist.css'


interface Todoprops {
    todo: string
    settodo: React.Dispatch<React.SetStateAction<string>>
    handleadd: (e: React.FormEvent) => void
}

const ToDoApp: React.FC<Todoprops> = ({ todo, settodo, handleadd }) => {

    return (
        <form className="input" onSubmit={(e)=>handleadd(e)}>
            <h1>Task</h1>
            <input type="input" value={todo} onChange={(e) => settodo(e.target.value)} placeholder="Enter a Task"></input>
            <button type="submit" >Submit</button>
        </form>

    )
}

export default ToDoApp;
import React, { useState } from 'react'
import { Todo } from './model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './todolist.css'

type Props =
    {
        todo: Todo
        todos: Todo[]
        settodos: React.Dispatch<React.SetStateAction<Todo[]>>
    }



const SingleTodo = ({ todo, todos, settodos }: Props) => {

    const [edit, setedit] = useState<boolean>(false);
    const [edittodo, setedittodo] = useState<string>(todo.todo)

    const handledone = (id: number) => {
        settodos(
            todos.map((value) =>
                value.id === id ? { ...value, isDone: !todo.isDone } : todo)
        )
    }

    const handledelete = (id: number) => {
        settodos(
            todos.filter(value => value.id != id)
        )
    }


    return (
        <form className='"todos_single'>
            {todo.isDone ? (<s className='todos_single--text'>{todo.todo}</s>) : <span className='todos_single--text'>{todo.todo}</span>}

            <span className="icon"><AiFillEdit /></span>
            <span className="icon" onClick={() => handledelete(todo.id)}><AiFillDelete /></span>
            <span className="icon" onClick={() => handledone(todo.id)}><MdDone /></span>
        </form>
    )
}

export default SingleTodo
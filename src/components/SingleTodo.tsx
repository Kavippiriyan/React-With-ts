import React from 'react'
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
    return (
        <form className='"todos_single'>

            <span className='todos_single--text'>{todo.todo}</span>
            <span className="icon"><AiFillEdit /></span>
            <span className="icon"><AiFillDelete /></span>
            <span className="icon"><MdDone /></span>
        </form>
    )
}

export default SingleTodo
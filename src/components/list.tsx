import React, { FC } from 'react'
import { Todo } from './model'
import './todolist.css'

interface Props {
    todos: Todo[]
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const List: React.FC<Props> = ({ todos, settodos }) => {
    return (
        <div className='todos'>
            {todos.map(value => (
                <li>{value.todo}</li>
            ))}
        </div>
    )
}

export default List;
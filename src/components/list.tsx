import React, { FC } from 'react'
import { Todo } from './model'
import './todolist.css'
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todo[]
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const List: React.FC<Props> = ({ todos, settodos }) => {
    return (
        <div className='todos'>
            {todos.map(value => (
                <SingleTodo todo={value} key={value.id} todos={todos} settodos={settodos} />
            ))}
        </div>
    )
}

export default List;
import React from 'react'
import emptyImage from '../../assets/img/todo-empty.png'

export default function TodoListEmpty() {
    return (
        <div className='dashbaord-empty'>
            <img src={emptyImage} alt="Empty Dashboard" />
        </div>
    )
}

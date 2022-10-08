import React from 'react'
import emptyImage from '../../assets/img/todo-empty.png'

export default function TodoListEmpty({ setShowModal }) {
    return (
        <div className='dashbaord-empty' onClick={() => setShowModal(true)}>
            <img src={emptyImage} alt="Empty Dashboard" />
        </div>
    )
}

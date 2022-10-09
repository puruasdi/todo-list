import React from 'react'
import emptyImage from '../../assets/img/todo-empty.png'

//redux
import { useDispatch } from 'react-redux'
import { setShowTodoModal } from '../../state/slice/todoSlice'

export default function TodoListEmpty() {
    const dispatch = useDispatch()
    return (
        <div
            data-cy="todo-empty-state"
            className='dashbaord-empty'
            onClick={() => dispatch(setShowTodoModal(true))}>
            <img src={emptyImage} alt="Empty Dashboard" />
        </div>
    )
}

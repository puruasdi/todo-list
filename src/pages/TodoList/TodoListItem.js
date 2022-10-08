import React from 'react'
import { Card, Form } from 'react-bootstrap'

import editIcon from "../../assets/img/edit-icon.svg"
import deleteIcon from '../../assets/img/delete-icon.svg'

export default function TodoListItem(props) {

    const { setModalShow } = props;

    return (
        <>
            <Card className='todo-list-card'>
                <Form.Check className='todo-list-check' />
                <div className='todo-list-indicator'>
                </div>
                <span className='todo-list-name'>
                    Test tesaan
                </span>
                <img src={editIcon} alt="edit todo" className='todo-list-edit' onClick={() => setModalShow(true)} />
                <img src={deleteIcon} alt="delete todo" className='todo-list-delete' />
            </Card>
            <Card className='todo-list-card'>
                <Form.Check className='todo-list-check' />
                <div className='todo-list-indicator'>
                </div>
                <span className='todo-list-name todo-done'>
                    Test tesaan
                </span>
                <img src={editIcon} alt="edit todo" className='todo-list-edit' />
                <img src={deleteIcon} alt="delete todo" className='todo-list-delete' />
            </Card>
        </>
    )
}

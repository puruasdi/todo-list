import React from 'react'
import { Container } from 'react-bootstrap'

import TodoListHeader from './TodoListHeader'
import TodoListEmpty from './TodoListEmpty'

export default function TodoList() {
    return (
        <Container>
            <div className='wrapper'>
                <TodoListHeader />
                <TodoListEmpty />
            </div>
        </Container>
    )
}

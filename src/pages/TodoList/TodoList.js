import { useState } from 'react'
import { Container } from 'react-bootstrap'

import TodoListHeader from './TodoListHeader/TodoListHeader'
import TodoListEmpty from './TodoListEmpty'
import TodoListItem from './TodoListItem'
import TodoListModal from './TodoListModal'

export default function TodoList() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container>
            <div className='wrapper'>
                <TodoListModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <TodoListHeader />
                <TodoListEmpty />
                <TodoListItem
                    setModalShow={setModalShow}
                />
            </div>
        </Container>
    )
}

import { useState, useEffect } from 'react'
import { Modal, Form, Row, Col, Dropdown, Button } from 'react-bootstrap'

//component
import Loading from '../../components/Loading'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setShowTodoModal, setSelectedTodo } from '../../state/slice/todoSlice';

const defaultTodo = {
    title: '',
    priority: "very-high",
    is_active: true,
    activity_group_id: 0
}

const priorityOption = [
    'very-high', 'high', 'normal', 'low', 'very-low'
]

export default function TodoListModal(props) {
    const { addTodo, updateTodo } = props;
    //redux
    const dispatch = useDispatch()
    const { showTodoModal, selectedTodo } = useSelector((state) => state.todo)
    const selectedActivity = useSelector((state) => state.activity.selectedActivity)
    const addLoading = useSelector((state) => state.loading.addLoading)

    //State to save input change
    const [todo, setTodo] = useState(defaultTodo)

    const handleInputChange = (name, value) => {
        setTodo((current) => {
            return { ...current, [name]: value }
        })
    }

    const handleSubmit = () => {
        if (todo.id) {
            updateTodo(todo)
        } else {
            addTodo(todo)
        }
    }

    useEffect(() => {
        if (showTodoModal) {
            if (selectedTodo.id) {
                setTodo(selectedTodo)
            } else {
                setTodo({ ...defaultTodo, activity_group_id: selectedActivity.id })
            }
        }
    }, [selectedTodo, selectedActivity, showTodoModal])

    return (
        <Modal
            data-cy="modal-add"
            show={showTodoModal}
            onHide={() => {
                dispatch(setSelectedTodo(''));
                dispatch(setShowTodoModal(false));
                setTodo(defaultTodo)
            }}
            size="lg"
            centered
        >
            <Modal.Header
                data-cy="modal-add-title"
                className='modal-padding-custom'>
                <Modal.Title>
                    {selectedTodo.id ?
                        "Edit Item" :
                        "Tambah List Item"
                    }
                </Modal.Title>
                <div
                    data-cy="modal-add-close-button"
                    className='close-button'
                    onClick={() => dispatch(setShowTodoModal(false))}
                ></div>
            </Modal.Header>
            <Modal.Body className='modal-padding-custom'>
                <Form>
                    <Form.Group className="mb-4">
                        <Form.Label
                            data-cy="modal-add-name-title"
                            className='form-label-custom'>
                            NAMA LIST ITEM
                        </Form.Label>
                        <Form.Control
                            data-cy="modal-add-name-input"
                            className='form-input-custom' value={todo.title}
                            size="lg"
                            type="text"
                            placeholder="Tambahkan nama Activity"
                            onChange={(e) => handleInputChange("title", e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label
                            data-cy="modal-add-priority-title"
                            className='form-label-custom'>
                            PRIORITY
                        </Form.Label>
                        <Row>
                            <Col sm='6'>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        data-cy="modal-add-priority-dropdown"
                                        className="form-dropdown-custom"
                                        variant="success"
                                    >
                                        <div className={`todo-list-indicator ${todo.priority}`}>
                                        </div>
                                        <span >{todo.priority}</span>
                                        <div className='dropdown-icon'></div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {priorityOption.map(priority => (
                                            <Dropdown.Item href="#/"
                                                data-cy="modal-add-priority-item"
                                                key={priority}
                                                onClick={() => handleInputChange('priority', priority)} >
                                                {priority}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='modal-padding-custom' >
                <Button
                    data-cy="modal-add-save-button"
                    disabled={!todo.title}
                    onClick={() => handleSubmit()}>
                    {addLoading ?
                        <Loading /> :
                        <>
                            <span className='add-icon'></span>
                            Simpan
                        </>}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

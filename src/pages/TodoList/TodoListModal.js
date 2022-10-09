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
    const { addTodo } = props;
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
            show={showTodoModal}
            onHide={() => {
                dispatch(setSelectedTodo(''));
                dispatch(setShowTodoModal(false));
                setTodo(defaultTodo)
            }}
            size="lg"
            centered
        >
            <Modal.Header closeButton className='modal-padding-custom'>
                <Modal.Title>
                    {selectedTodo.id ?
                        "Edit Item" :
                        "Tambah List Item"
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-padding-custom'>
                <Form>
                    <Form.Group className="mb-4">
                        <Form.Label className='form-label-custom'>NAMA LIST ITEM</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Tambahkan nama Activity" className='form-input-custom' value={todo.title} onChange={(e) => handleInputChange("title", e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='form-label-custom'>PRIORITY</Form.Label>
                        <Row>
                            <Col sm='6'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success"
                                        className="form-dropdown-custom"
                                    >
                                        <div className={`todo-list-indicator ${todo.priority}`}>
                                        </div>
                                        <span >{todo.priority}</span>
                                        <div className='dropdown-icon'></div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {priorityOption.map(priority => (
                                            <Dropdown.Item href="#/" key={priority} onClick={() => handleInputChange('priority', priority)} >{priority}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='modal-padding-custom' >
                <Button disabled={!todo.title} onClick={() => addTodo(todo)}>
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

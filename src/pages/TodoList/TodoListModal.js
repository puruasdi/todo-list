import { useState } from 'react'
import { Modal, Form, Row, Col, Dropdown } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default function TodoListModal(props) {

    const [selectDropdown, setSelectDropdown] = useState("Very High")
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton className='modal-padding-custom'>
                <Modal.Title>
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-padding-custom'>
                <Form>
                    <Form.Group className="mb-4">
                        <Form.Label className='form-label-custom'>NAMA LIST ITEM</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Tambahkan nama Activity" className='form-input-custom' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='form-label-custom'>PRIORITY</Form.Label>
                        <Row>
                            <Col sm='6'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success"
                                        className="form-dropdown-custom"
                                    >
                                        <div className='todo-list-indicator'>
                                        </div>
                                        <span >{selectDropdown}</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Very High</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">High</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Medium</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Low</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Very Low</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='modal-padding-custom'>
                <Button>
                    Simpan
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

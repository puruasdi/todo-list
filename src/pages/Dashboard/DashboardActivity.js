import { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import deleteIcon from '../../assets/img/delete-icon.svg'
import ModalDelete from '../../components/ModalDelete';
import ModalAlert from '../../components/ModalAlert'

export default function DashboardActivity() {
    const [modalShow, setModalShow] = useState(false);
    const [alert, setAlert] = useState(false)

    return (
        <>
            <ModalAlert
                show={alert}
                onHide={() => setAlert(false)}
            />
            <ModalDelete
                data-cy="todo-modal-delete"
                show={modalShow}
                onHide={() => setModalShow(false)}
                name="activity"
                value="Meeting dengan asdi"
            />
            <Row>
                <Col md="6" lg='3' className='card-wrapper'>
                    <div className='activity-card' data-cy="activity-item">
                        <div className='activity-container' >
                            <h4 data-cy="activity-item-title">New Activity</h4>
                        </div>
                        <div className='activity-footer'>
                            <span data-cy="activity-item-date" className='activity-date'>07 Oktober 2022</span>
                            {/* <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" onClick={() => setModalShow(true)} /> */}
                            <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" onClick={() => setAlert(true)} />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

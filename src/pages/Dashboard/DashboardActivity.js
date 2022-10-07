import { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import deleteIcon from '../../assets/img/delete-icon.svg'
import ModalDelete from '../../components/ModalDelete';



export default function DashboardActivity() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
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
                            <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" onClick={() => setModalShow(true)} />
                        </div>
                    </div>
                </Col>
                <Col md="6" lg='3' className='card-wrapper'>
                    <div className='activity-card' data-cy="activity-item">
                        <div className='activity-container' >
                            <h4 data-cy="activity-item-title">Makan pagi bangun tidur</h4>
                        </div>
                        <div className='activity-footer'>
                            <span data-cy="activity-item-date" className='activity-date'>07 Oktober 2022</span>
                            <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" onClick={() => setModalShow(true)} />
                        </div>
                    </div>
                </Col>
                <Col md="6" lg='3' className='card-wrapper'>
                    <div className='activity-card' data-cy="activity-item">
                        <div className='activity-container' >
                            <h4 data-cy="activity-item-title">New Activity</h4>
                        </div>
                        <div className='activity-footer'>
                            <span data-cy="activity-item-date" className='activity-date'>07 Oktober 2022</span>
                            <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" onClick={() => setModalShow(true)} />
                        </div>
                    </div>
                </Col>
                <Col md="6" lg='3' className='card-wrapper'>
                    <div className='activity-card' data-cy="activity-item">
                        <div className='activity-container' >
                            <h4 data-cy="activity-item-title">Jogging</h4>
                        </div>
                        <div className='activity-footer'>
                            <span data-cy="activity-item-date" className='activity-date'>07 Oktober 2022</span>
                            <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" onClick={() => setModalShow(true)} />
                        </div>
                    </div>
                </Col>
                <Col md="6" lg='3' className='card-wrapper'>
                    <div className='activity-card' data-cy="activity-item">
                        <div className='activity-container' >
                            <h4 data-cy="activity-item-title">New Activity</h4>
                        </div>
                        <div className='activity-footer'>
                            <span data-cy="activity-item-date" className='activity-date'>07 Oktober 2022</span>
                            <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" onClick={() => setModalShow(true)} />
                        </div>
                    </div>
                </Col>
                <Col md="6" lg='3' className='card-wrapper'>
                    <div className='activity-card' data-cy="activity-item">
                        <div className='activity-container' >
                            <h4 data-cy="activity-item-title">New Activity</h4>
                        </div>
                        <div className='activity-footer'>
                            <span data-cy="activity-item-date" className='activity-date'>07 Oktober 2022</span>
                            <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" onClick={() => setModalShow(true)} />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
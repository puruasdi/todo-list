import { useState } from 'react';

//bootstrap
import { Row, Col } from "react-bootstrap";

//icon
import deleteIcon from '../../assets/img/delete-icon.svg'
import ModalDelete from '../../components/ModalDelete';

//router
import { Link } from "react-router-dom";

//redux
import { useDispatch } from "react-redux"
import { setSelectedActivity } from '../../state/slice/activitySlice'
import { setModalDelete } from '../../state/slice/modalSlice';

//set moment local to Indonesia
import moment from "moment"
import 'moment/locale/id';
moment.locale('id');

export default function DashboardActivity({ activities, handleDelete }) {
    //redux
    const dispatch = useDispatch()

    //select activity to get activity.id on delete purpose
    const [deleteActivity, setDeleteActivity] = useState('')

    return (
        <>
            <ModalDelete
                name="activity"
                value={deleteActivity?.title}
                id={deleteActivity?.id}
                handleDelete={handleDelete}
            />
            <Row>
                {activities.map(activity => (
                    <Col md="6" lg='3' className='card-wrapper' key={activity.id}>
                        <div
                            data-cy="activity-item"
                            className='activity-card' >
                            <Link to={`detail/${activity.id}`} className="link-custom" onClick={() => dispatch(setSelectedActivity(activity))} >
                                <div className='activity-container' >
                                    <h4 data-cy="activity-item-title" >{activity.title}</h4>
                                </div>
                            </Link>
                            <div className='activity-footer'>
                                <span data-cy="activity-item-date"
                                    className='activity-date'>
                                    {moment(activity.created_at).format('LL')}</span>
                                <img
                                    data-cy="activity-item-delete-button"
                                    src={deleteIcon}
                                    alt="Delete Icon"
                                    onClick={() => { setDeleteActivity(activity); dispatch(setModalDelete(true)); }}
                                />
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}

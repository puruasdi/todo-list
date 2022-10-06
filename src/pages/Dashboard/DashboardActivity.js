import React from 'react';
import { Row, Col } from "react-bootstrap";

import deleteIcon from '../../assets/img/delete-icon.svg'

export default function DashboardActivity() {
    return (
        <Row>
            <Col md="6" lg='3' className='card-wrapper'>
                <div className='activity-card' data-cy="activity-item">
                    <div className='activity-container' >
                        <h4 data-cy="activity-item-title">New Activity</h4>
                    </div>
                    <div className='activity-footer'>
                        <span data-cy="activity-item-date" className='activity-date'>07 Oktober 2022</span>
                        <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" />
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
                        <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" />
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
                        <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" />
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
                        <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" />
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
                        <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" />
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
                        <img src={deleteIcon} alt="Delete Icon" data-cy="activity-item-delete-button" />
                    </div>
                </div>
            </Col>
        </Row>
    )
}

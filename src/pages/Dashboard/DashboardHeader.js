import React from 'react';
import { Button } from "react-bootstrap";

export default function DashboardHeader() {
    return (
        <div className='dashboard-header'>
            <h1 data-cy="activity-title">Activity</h1>
            <Button className='add-button' data-cy="activity-add-button">
                <span className='add-icon'></span>
                Tambah
            </Button>
        </div>
    )
}

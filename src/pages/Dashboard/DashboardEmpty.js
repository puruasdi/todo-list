import React from 'react';

import emptyImage from '../../assets/img/empty-dashboard.png'

export default function DashboardEmpty({ addActivity }) {
    return (
        <div
            data-cy="activity-empty-state"
            className='dashbaord-empty'
            onClick={() => addActivity()}>
            <img src={emptyImage} alt="Empty Dashboard" />
        </div>
    )
}

import React from 'react';

import emptyImage from '../../assets/img/empty-dashboard.png'

export default function DashboardEmpty({ addActivity }) {
    return (
        <div className='dashbaord-empty' data-cy="activity-empty-state" onClick={() => addActivity()}>
            <img src={emptyImage} alt="Empty Dashboard" />
        </div>
    )
}

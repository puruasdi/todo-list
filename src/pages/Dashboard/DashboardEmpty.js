import React from 'react';

import emptyImage from '../../assets/img/empty-dashboard.png'

export default function DashboardEmpty() {
    return (
        <div className='dashbaord-empty' data-cy="activity-empty-state">
            <img src={emptyImage} alt="Empty Dashboard" />
        </div>
    )
}

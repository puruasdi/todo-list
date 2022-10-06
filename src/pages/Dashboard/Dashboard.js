import React from 'react';
import { Container } from "react-bootstrap";
import DashboardHeader from './DashboardHeader';
// import DashboardEmpty from './DashboardEmpty';
import DashboardActivity from './DashboardActivity';

export default function Dashboard() {
    return (
        <Container>
            <div className='wrapper'>
                <DashboardHeader />
                {/* <DashboardEmpty /> */}
                <DashboardActivity />
            </div>
        </Container>
    )
}

import { useState } from 'react';
import { Button } from "react-bootstrap";
import Loading from '../../components/Loading';

export default function DashboardHeader() {
    //state
    const [loading, setLoading] = useState(false)

    return (
        <div className='dashboard-header'>
            <h1 data-cy="activity-title">Activity</h1>
            <Button
                className='custom-button'
                data-cy="activity-add-button"
                onClick={() => setLoading(!loading)}
            >
                {loading ?
                    <Loading /> :
                    <>
                        <span className='add-icon'></span>
                        Tambah
                    </>}
            </Button>
        </div>
    )
}

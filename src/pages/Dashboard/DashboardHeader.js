import React from 'react';
import { Button } from "react-bootstrap";

//component
import Loading from '../../components/Loading';

//redux
import { useSelector } from "react-redux"

export default function DashboardHeader({ handleClick }) {
    //redux
    const addLoading = useSelector((state) => state.loading.addLoading)

    return (
        <div className='content-header'>
            <h1 data-cy="activity-title">Activity</h1>
            <Button
                className='custom-button'
                data-cy="activity-add-button"
                onClick={() => handleClick()}
            >
                {addLoading ?
                    <Loading /> :
                    <>
                        <span className='add-icon'></span>
                        Tambah
                    </>}
            </Button>
        </div>
    )
}

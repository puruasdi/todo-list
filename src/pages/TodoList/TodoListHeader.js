import { useState } from 'react';
import { Button } from "react-bootstrap";
import Loading from '../../components/Loading';

import backIcon from "../../assets/img/back-icon.svg"
import editIcon from "../../assets/img/edit-icon.svg"
import sortIcon from "../../assets/img/sort-icon.svg"


export default function TodoListHeader() {
    //state
    const [loading, setLoading] = useState(false)

    return (
        <div className='content-header'>
            <div className='new-activity-title'>
                <img src={backIcon} className="back-icon" alt="Back" />
                <h1 data-cy="activity-title">New Activity</h1>
                <img src={editIcon} className="edit-icon" alt="Edit" />
            </div>
            <div className='sort-add-button'>
                <div id="customSortButton">
                    <img src={sortIcon} id="sortIcon" />
                </div>
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
        </div>
    )
}

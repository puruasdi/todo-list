import { useEffect, useRef, useState } from 'react';
import axios from 'axios'

//router
import { Link } from "react-router-dom";

//icon
import backIcon from "../../../assets/img/back-icon.svg"
import editIcon from "../../../assets/img/edit-icon.svg"

//redux
import { useSelector } from 'react-redux'

//Enviroment
const mainurl = process.env.REACT_APP_MAIN_URL

export default function HeaderTitle() {
    //redux
    const selectedActivity = useSelector((state) => state.activity.selectedActivity)

    //state for edit activity
    const [edit, setEdit] = useState(false)
    const [activityValue, setActivityValue] = useState(selectedActivity.title)


    const inputRef = useRef(null);

    //Auto focus cursor on input when user click edit icon
    useEffect(() => {
        if (edit) {
            inputRef.current.focus()
        }
    }, [edit])

    // Check if user click mouse outside input when state is edit
    useEffect(() => {
        const handleClickOutside = async (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setEdit(false)

                //Update activity on api
                try {
                    await axios.patch(`${mainurl}/activity-groups/${selectedActivity.id}`, {
                        "title": inputRef.current.value
                    });
                } catch (error) {
                    console.log(error)
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputRef])

    return (
        <div className='header-title'>
            <Link to={`/`}>
                <img src={backIcon} className="back-icon" alt="Back" />
            </Link>
            {edit ?
                <input
                    className="input-activity"
                    ref={inputRef}
                    value={activityValue}
                    onChange={(e) => setActivityValue(e.target.value)}
                />
                :
                <h1 data-cy="activity-title">{activityValue}</h1>
            }
            <img src={editIcon} className="edit-icon" alt="Edit" onClick={() => setEdit(!edit)} />
        </div>
    )
}

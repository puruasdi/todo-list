import { useEffect, useRef, useState } from 'react'

import backIcon from "../../../assets/img/back-icon.svg"
import editIcon from "../../../assets/img/edit-icon.svg"

export default function HeaderTitle() {
    //state for edit activity
    const [edit, setEdit] = useState(false)
    const [activityValue, setActivityValue] = useState("New Activity")

    const inputRef = useRef(null);

    //Auto focus cursor on input when user click edit icon
    useEffect(() => {
        if (edit) {
            inputRef.current.focus()
        }
    }, [edit])

    // Check if user click mouse outside input when state is edit
    useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setEdit(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputRef])


    return (
        <div className='header-title'>
            <img src={backIcon} className="back-icon" alt="Back" />
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

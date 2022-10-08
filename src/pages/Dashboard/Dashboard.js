import { useState, useEffect, useCallback } from 'react';
import { Container } from "react-bootstrap";

import axios from 'axios'

//Components
import DashboardHeader from './DashboardHeader';
import DashboardEmpty from './DashboardEmpty';
import DashboardActivity from './DashboardActivity';
import BigLoading from '../../components/BigLoading';

//Redux
import { useSelector, useDispatch } from "react-redux"
import { setContentLoading, setDeleteLoading, setAddLoading } from "../../state/slice/loadingsSlice"
import { setAlertName, setShowAlert } from '../../state/slice/alertSlice';

//Enviroment
const mainurl = process.env.REACT_APP_MAIN_URL
const email = `?email=${process.env.REACT_APP_EMAIL}`

export default function Dashboard() {
    //redux 
    const dispatch = useDispatch()
    const contentLoading = useSelector((state) => state.loading.contentLoading)

    const [activities, setActivities] = useState([])

    const getActivities = useCallback(
        async () => {
            dispatch(setContentLoading(true))
            try {
                const response = await axios.get(`${mainurl}/activity-groups${email}`);
                setActivities(response.data.data)
                dispatch(setContentLoading(false))
            } catch (error) {
                setActivities([])
                dispatch(setContentLoading(false))
            }
        },
        [dispatch],
    )

    const deleteActivity = async (id) => {
        dispatch(setDeleteLoading(true))
        try {
            await axios.delete(`${mainurl}/activity-groups/${id}`);
            getActivities()
            dispatch(setDeleteLoading(false))
            dispatch(setAlertName("Activity"))
            dispatch(setShowAlert(true))
        } catch (error) {
            dispatch(setDeleteLoading(false))
        }
    }

    const addActivity = async (id) => {
        dispatch(setAddLoading(true))
        try {
            await axios.post(`${mainurl}/activity-groups`, {
                "title": "New Activity",
                "email": "asdi@email.com"
            });
            getActivities()
            dispatch(setAddLoading(false))
        } catch (error) {
            dispatch(setAddLoading(false))
        }
    }

    //Get activities when this componnent is rendered
    useEffect(() => {
        getActivities()
    }, [getActivities])

    return (
        <Container>
            <div className='wrapper'>
                <DashboardHeader
                    handleClick={addActivity}
                />

                {contentLoading ?
                    // Show loading while fecthing the api
                    < BigLoading /> :
                    activities.length === 0 ?
                        //If data is empty show empty dashboard
                        <DashboardEmpty
                            addActivity={addActivity}
                        /> :
                        //Show activicty cards
                        <DashboardActivity
                            activities={activities}
                            handleDelete={deleteActivity}
                        />
                }
            </div>
        </Container>
    )
}

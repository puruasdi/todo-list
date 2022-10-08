import { useState, useEffect, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

import { Navigate } from "react-router-dom";

//Components
import TodoListHeader from './TodoListHeader/TodoListHeader'
import TodoListEmpty from './TodoListEmpty'
import TodoListItem from './TodoListItem'
import TodoListModal from './TodoListModal'
import BigLoading from '../../components/BigLoading'

//Redux
import { useSelector, useDispatch } from "react-redux"
import { setContentLoading, setDeleteLoading, setAddLoading } from "../../state/slice/loadingsSlice"
import { setAlertName, setShowAlert } from '../../state/slice/alertSlice';

//Enviroment
const mainurl = process.env.REACT_APP_MAIN_URL

export default function TodoList() {
    const [showModal, setShowModal] = useState(false);
    const [todos, setTodos] = useState([])

    //redux 
    const dispatch = useDispatch()
    const contentLoading = useSelector((state) => state.loading.contentLoading)
    const selectedActivity = useSelector((state) => state.activity.selectedActivity)

    const getTodos = useCallback(
        async (id) => {
            dispatch(setContentLoading(true))
            try {
                const response = await axios.get(`${mainurl}/todo-items?activity_group_id=${id}`);
                setTodos(response.data.data)
                dispatch(setContentLoading(false))
            } catch (error) {
                setTodos([])
                dispatch(setContentLoading(false))
            }
        },
        [dispatch],
    )

    useEffect(() => {
        if (selectedActivity) {
            getTodos(selectedActivity.id)
        }
    }, [selectedActivity, getTodos])

    if (selectedActivity) {
        return (
            <Container>
                <div className='wrapper'>
                    <TodoListModal
                        show={showModal}
                        setShow={setShowModal}
                    />
                    <TodoListHeader
                        handleClick={setShowModal}
                    />
                    {contentLoading ?
                        // Show loading while fecthing the api
                        < BigLoading /> :
                        todos.length === 0 ?
                            //If data is empty show empty todo pages
                            <TodoListEmpty
                                setShowModal={setShowModal}
                            /> :
                            //show todo list
                            <TodoListItem
                                todos={todos}
                                setShowModal={setShowModal}
                            />
                    }
                </div>
            </Container>
        )
    } else {
        return (
            <Navigate to="/" />
        )
    }
}

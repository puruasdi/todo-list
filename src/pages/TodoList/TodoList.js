import { useState, useEffect, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

import { Navigate } from "react-router-dom";

//Components
import TodoListHeader from './TodoListHeader/TodoListHeader'
import TodoListEmpty from './TodoListEmpty'
import TodoListItem from './TodoListItem'
import TodoListModal from './TodoListModal'
// import BigLoading from '../../components/BigLoading'

//Redux
import { useSelector, useDispatch } from "react-redux"
import { setContentLoading, setAddLoading } from "../../state/slice/loadingsSlice"
import { setShowTodoModal, setSelectedTodo } from '../../state/slice/todoSlice';

//Enviroment
const mainurl = process.env.REACT_APP_MAIN_URL

export default function TodoList() {
    //redux 
    const dispatch = useDispatch()
    // const contentLoading = useSelector((state) => state.loading.contentLoading)
    const selectedActivity = useSelector((state) => state.activity.selectedActivity)

    const [todos, setTodos] = useState([])

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

    const addTodo = async (todo) => {
        dispatch(setAddLoading(true))
        try {
            await axios.post(`${mainurl}/todo-items`, todo);
            getTodos(selectedActivity.id)
            resetModalState()
        } catch (error) {
            resetModalState()
        }
    }
    const updateTodo = async (todo) => {
        dispatch(setAddLoading(true))
        try {
            await axios.patch(`${mainurl}/todo-items/${todo.id}`, {
                "title": todo.title,
                "priority": todo.priority
            });
            getTodos(selectedActivity.id)
            resetModalState()
        } catch (error) {
            resetModalState()
        }
    }

    const resetModalState = () => {
        dispatch(setAddLoading(false))
        dispatch(setSelectedTodo(''))
        dispatch(setShowTodoModal(false))
    }

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
                        addTodo={addTodo}
                        updateTodo={updateTodo}
                    />
                    <TodoListHeader
                        showDropdown={todos.length !== 0}
                    />

                    {todos.length === 0 ?
                        //If data is empty show empty todo pages
                        <TodoListEmpty /> :
                        //show todo list
                        <TodoListItem
                            todos={todos}
                            setTodos={setTodos}
                        />
                    }

                    {/* {contentLoading ?
                        // Show loading while fecthing the api
                        < BigLoading /> :
                        todos.length === 0 ?
                            //If data is empty show empty todo pages
                            <TodoListEmpty /> :
                            //show todo list
                            <TodoListItem
                                todos={todos}
                                setTodos={setTodos}
                            />
                    } */}
                </div>
            </Container>
        )
    } else {
        return (
            <Navigate to="/" />
        )
    }
}

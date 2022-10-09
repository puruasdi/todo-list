import { useEffect, useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import axios from "axios"

//Icon image
import editIcon from "../../assets/img/edit-icon.svg"
import deleteIcon from '../../assets/img/delete-icon.svg'

//component
import ModalDelete from '../../components/ModalDelete'

//redux
import { useSelector, useDispatch } from "react-redux"
import { setDeleteLoading } from "../../state/slice/loadingsSlice"
import { setShowTodoModal, setSelectedTodo } from '../../state/slice/todoSlice'
import { setModalDelete } from '../../state/slice/modalSlice';

//Enviroment
const mainurl = process.env.REACT_APP_MAIN_URL

export default function TodoListItem(props) {
    const { todos, setTodos } = props;
    //redux
    const dispatch = useDispatch()
    const selectedSort = useSelector((state) => state.todo.selectedSort)

    //state
    const [filterTodos, setfilterTodos] = useState([])
    const [deleteTodo, setDeleteTodo] = useState('')

    const handleUpdateActive = async (value, id, index) => {
        //Update todo in this component
        const newTodos = [...filterTodos]
        newTodos[index].is_active = !value
        setfilterTodos(newTodos)

        //Update todo on api
        try {
            await axios.patch(`${mainurl}/todo-items/${id}`, {
                "is_active": !value
            });
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteTodo = async (id) => {
        //Delete todo in this component
        dispatch(setDeleteLoading(true))
        const newTodos = [...filterTodos]
        const objWithIdIndex = newTodos.findIndex((obj) => obj.id === id)
        newTodos.splice(objWithIdIndex, 1);
        setfilterTodos(newTodos)

        //Reset parent state to show empty page
        if (newTodos.length === 0) {
            setTodos([])
        }

        //Delete todo on api
        try {
            await axios.delete(`${mainurl}/todo-items/${id}`);
            dispatch(setDeleteLoading(false))
            dispatch(setModalDelete(true))
        } catch (error) {
            dispatch(setDeleteLoading(false))
            dispatch(setModalDelete(true))
        }
    }

    useEffect(() => {
        switch (selectedSort) {
            case "Terbaru":
                setfilterTodos([...todos].sort((a, b) => b.id - a.id))
                break;
            case "Terlama":
                setfilterTodos([...todos].sort((a, b) => a.id - b.id))
                break;
            case "A-Z":
                setfilterTodos([...todos].sort((a, b) => a.title > b.title ? 1 : -1))
                break;
            case "Z-A":
                setfilterTodos([...todos].sort((a, b) => a.title > b.title ? -1 : 1))
                break;
            case "Belum Selesai":
                setfilterTodos([...todos].sort((a, b) => a.is_active > b.is_active ? -1 : 1))
                break;
            default:
                break;
        }
    }, [todos, selectedSort])

    return (
        <>
            <ModalDelete
                name="todo"
                value={deleteTodo?.title}
                id={deleteTodo?.id}
                handleDelete={handleDeleteTodo}
            />
            {filterTodos.map((todo, index) => (
                <Card
                    data-cy="todo-item"
                    className='todo-list-card'
                    key={todo.id}
                >
                    <Form.Check
                        data-cy="todo-item-checkbox"
                        className='todo-list-check'
                        checked={!todo?.is_active}
                        type='checkbox'
                        onChange={(e) => handleUpdateActive(e.target.checked, todo.id, index)} />
                    <div
                        data-cy="todo-item-priority-indicator"
                        className={`todo-list-indicator ${todo.priority}`}>
                    </div>
                    <span
                        data-cy="todo-item-title"
                        className={`todo-list-name ${todo.is_active ? '' : 'todo-done'}`}>
                        {todo.title}
                    </span>
                    <img
                        data-cy="todo-item-edit-button"
                        src={editIcon} alt="edit todo" className='todo-list-edit'
                        onClick={() => {
                            dispatch(setSelectedTodo(todo));
                            dispatch(setShowTodoModal(true))
                        }} />
                    <img
                        data-cy="todo-item-delete-button"
                        src={deleteIcon} alt="delete todo" className='todo-list-delete'
                        onClick={() => {
                            setDeleteTodo(todo);
                            dispatch(setModalDelete(true))
                        }}
                    />
                </Card>
            ))}
        </>
    )
}

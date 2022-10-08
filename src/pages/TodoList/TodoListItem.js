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

//Enviroment
const mainurl = process.env.REACT_APP_MAIN_URL

export default function TodoListItem(props) {
    const { setModalShow, todos } = props;
    //redux
    const dispatch = useDispatch()
    const selectedSort = useSelector((state) => state.todo.selectedSort)

    //state
    const [filterTodos, setfilterTodos] = useState([])
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteTodo, setDeleteTodo] = useState('')

    const handleUpdateActive = async (value, id, index) => {
        const newTodos = [...filterTodos]
        newTodos[index].is_active = !value
        setfilterTodos(newTodos)

        try {
            await axios.patch(`${mainurl}/todo-items/${id}`, {
                "is_active": !value
            });
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteTodo = async (id) => {
        dispatch(setDeleteLoading(true))
        const newTodos = [...filterTodos]
        const objWithIdIndex = newTodos.findIndex((obj) => obj.id === id)
        newTodos.splice(objWithIdIndex, 1);
        setfilterTodos(newTodos)
        
        try {
            await axios.delete(`${mainurl}/todo-items/${id}`);
            dispatch(setDeleteLoading(false))
            setDeleteModal(false)
        } catch (error) {
            dispatch(setDeleteLoading(false))
            setDeleteModal(false)
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
                show={deleteModal}
                setShow={setDeleteModal}
                name="todo"
                value={deleteTodo?.title}
                id={deleteTodo?.id}
                handleDelete={handleDeleteTodo}
            />
            {filterTodos.map((todo, index) => (
                <Card className='todo-list-card' key={todo.id}>
                    <Form.Check
                        className='todo-list-check'
                        checked={!todo?.is_active}
                        type='checkbox'
                        onChange={(e) => handleUpdateActive(e.target.checked, todo.id, index)} />
                    <div className={`todo-list-indicator ${todo.priority}`}>
                    </div>
                    <span className={`todo-list-name ${todo.is_active ? '' : 'todo-done'}`}>
                        {todo.title}
                    </span>
                    <img src={editIcon} alt="edit todo" className='todo-list-edit' onClick={() => setModalShow(true)} />
                    <img src={deleteIcon} alt="delete todo" className='todo-list-delete'
                        onClick={() => { setDeleteTodo(todo); setDeleteModal(true) }}
                    />
                </Card>
            ))}
        </>
    )
}

import { useEffect, useState } from 'react'
import { Card, Form } from 'react-bootstrap'


//Icon image
import editIcon from "../../assets/img/edit-icon.svg"
import deleteIcon from '../../assets/img/delete-icon.svg'

//redux
import { useSelector } from "react-redux"

export default function TodoListItem(props) {
    //redux
    const selectedSort = useSelector((state) => state.todo.selectedSort)

    const [filterTodos, setfilterTodos] = useState([])

    const { setModalShow, todos } = props;

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

    useEffect(() => {
        console.log(filterTodos)
    }, [filterTodos])


    return (
        <>
            {filterTodos.map(todo => (
                <Card className='todo-list-card' key={todo.id}>
                    <Form.Check className='todo-list-check' checked={!todo.is_active} />
                    {/* <Form.Check className='todo-list-check' /> */}
                    <div className={`todo-list-indicator ${todo.priority}`}>
                    </div>
                    <span className={`todo-list-name ${todo.is_active ? '' : 'todo-done'}`}>
                        {todo.title}
                    </span>
                    <img src={editIcon} alt="edit todo" className='todo-list-edit' onClick={() => setModalShow(true)} />
                    <img src={deleteIcon} alt="delete todo" className='todo-list-delete' />
                </Card>
            ))}
        </>
    )
}

import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
// import Loading from '../../../components/Loading';

//import images
import sortIcon from "../../../assets/img/sort-icon.svg"
import checkIcon from "../../../assets/img/check-icon.svg"
import sortNewestIcon from "../../../assets/img/sort-newest-icon.svg"
import sortLatestIcon from "../../../assets/img/sort-latest-icon.svg"
import sortAZIcon from "../../../assets/img/sort-az-icon.svg"
import sortZAIcon from "../../../assets/img/sort-za-icon.svg"
import activeIcon from "../../../assets/img/active-icon.svg"

//redux
import { useSelector, useDispatch } from "react-redux"
import { setSelectedSort, setShowTodoModal } from '../../../state/slice/todoSlice'

//Varibale for dropdown items
const dropdownItems = [
    { name: "Terbaru", iconName: sortNewestIcon, testName: "sort-latest" },
    { name: "Terlama", iconName: sortLatestIcon, testName: "sort-oldest" },
    { name: "A-Z", iconName: sortAZIcon, testName: "sort-az" },
    { name: "Z-A", iconName: sortZAIcon, testName: "sort-za" },
    { name: "Belum Selesai", iconName: activeIcon, testName: "sort-unfinished" },
]

export default function HeaderSortAdd({ showDropdown }) {
    //redux
    const dispatch = useDispatch()
    const { selectedSort } = useSelector((state) => state.todo)

    return (
        <div className='sort-add-button'>
            {showDropdown ?
                <Dropdown>
                    <Dropdown.Toggle>
                        <img
                            data-cy="todo-sort-button"
                            src={sortIcon} className="sort-icon" alt="Sort" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        data-cy="sort-parent"
                        className='dropdown-menu-container' >
                        {dropdownItems.map(item => (
                            <Dropdown.Item href="#/"
                                data-cy={item.testName}
                                key={item.name}
                                className="dropdown-item-container"
                                onClick={() => dispatch(setSelectedSort(item.name))}
                            >
                                <div className='dropdown-item'>
                                    <img src={item.iconName} alt="Newest" className='dropdown-item-img' />
                                    <span className='dropdown-item-name'>{item.name}</span>
                                    {selectedSort === item.name ?
                                        <img src={checkIcon} alt="Check" className='dropdown-item-check' /> : null
                                    }
                                </div>
                            </Dropdown.Item>

                        ))}
                    </Dropdown.Menu>
                </Dropdown> : null
            }

            <Button
                data-cy="todo-add-button"
                className='custom-button'
                onClick={() => dispatch(setShowTodoModal(true))}
            >
                <span className='add-icon'></span>
                Tambah
            </Button>
        </div>
    )
}

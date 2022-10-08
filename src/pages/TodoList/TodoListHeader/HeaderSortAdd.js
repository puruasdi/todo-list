import { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import Loading from '../../../components/Loading';

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
import { setSelectedSort } from '../../../state/slice/todoSlice'

//Varibale for dropdown items
const dropdownItems = [
    { name: "Terbaru", iconName: sortNewestIcon },
    { name: "Terlama", iconName: sortLatestIcon },
    { name: "A-Z", iconName: sortAZIcon },
    { name: "Z-A", iconName: sortZAIcon },
    { name: "Belum Selesai", iconName: activeIcon },
]

export default function HeaderSortAdd({ handleClick }) {
    //redux
    const dispatch = useDispatch()
    const { selectedSort } = useSelector((state) => state.todo)

    return (
        <div className='sort-add-button'>
            <Dropdown>
                <Dropdown.Toggle>
                    <img src={sortIcon} className="sort-icon" alt="Sort" />
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu-container' >
                    {dropdownItems.map(item => (
                        <Dropdown.Item href="#/"
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
            </Dropdown>

            <Button
                className='custom-button'
                data-cy="activity-add-button"
                onClick={() => handleClick(true)}
            >
                <span className='add-icon'></span>
                Tambah
            </Button>
        </div>
    )
}

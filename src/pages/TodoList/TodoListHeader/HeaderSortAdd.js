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

export default function HeaderSortAdd() {

    const [loading, setLoading] = useState(false)
    const [showSort, setShowSort] = useState(false)

    return (
        <div className='sort-add-button'>
            <Dropdown>
                <Dropdown.Toggle>
                    <img src={sortIcon} className="sort-icon" />
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu-container' >
                    <Dropdown.Item href="#/action-1"
                        className="dropdown-item-container"
                    >
                        <div className='dropdown-item'>
                            <img src={sortNewestIcon} alt="Newest" className='dropdown-item-img' />
                            <span className='dropdown-item-name'>Terbaru</span>
                            <img src={checkIcon} alt="Check" className='dropdown-item-check' />
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1"
                        className="dropdown-item-container"
                    >
                        <div className='dropdown-item'>
                            <img src={sortLatestIcon} alt="Latest" className='dropdown-item-img' />
                            <span className='dropdown-item-name'>Terlama</span>
                            <img src={checkIcon} alt="Check" className='dropdown-item-check' />
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1"
                        className="dropdown-item-container"
                    >
                        <div className='dropdown-item'>
                            <img src={sortAZIcon} alt="Newest" className='dropdown-item-img' />
                            <span className='dropdown-item-name'>A-Z</span>
                            <img src={checkIcon} alt="Check" className='dropdown-item-check' />
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1"
                        className="dropdown-item-container"
                    >
                        <div className='dropdown-item'>
                            <img src={sortZAIcon} alt="Newest" className='dropdown-item-img' />
                            <span className='dropdown-item-name'>Z-A</span>
                            <img src={checkIcon} alt="Check" className='dropdown-item-check' />
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1"
                        className="dropdown-item-container"
                    >
                        <div className='dropdown-item'>
                            <img src={activeIcon} alt="Newest" className='dropdown-item-img' />
                            <span className='dropdown-item-name'>Belum Selesai</span>
                            <img src={checkIcon} alt="Check" className='dropdown-item-check' />
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>



            <Button
                className='custom-button'
                data-cy="activity-add-button"
                onClick={() => setLoading(!loading)}
            >
                {loading ?
                    <Loading /> :
                    <>
                        <span className='add-icon'></span>
                        Tambah
                    </>}
            </Button>
        </div>
    )
}

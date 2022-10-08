import React from 'react';
import { Modal, Button } from 'react-bootstrap'

//component
import Loading from './Loading';

//image
import alertIcon from '../assets/img/alert-icon.svg'

//redux
import { useSelector } from "react-redux"

export default function ModalDelete(props) {
    const { name, value, setShow, show, handleDelete, id } = props

    //redux
    const deleteLoading = useSelector((state) => state.loading.deleteLoading)

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            size="md"
            centered
        >
            <Modal.Header id="headerStyle">
                <Modal.Title id="titleStyle">
                    <img src={alertIcon} alt="Warning" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="bodyStyle">
                <p id="pBodyStyle">
                    Apakah anda yakin menghapus {name} {" "}
                    <b>"{value}"</b>
                </p>
            </Modal.Body>
            <Modal.Footer
                id="footerStyle"
            >
                <Button variant="light" onClick={() => setShow(false)}>Batal</Button>
                <Button
                    className='custom-button'
                    variant="danger"
                    onClick={() => handleDelete(id)}
                >
                    {deleteLoading ?
                        <Loading /> :
                        <>
                            <span className='add-icon'></span>
                            Hapus
                        </>}
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

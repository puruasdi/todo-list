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
            data-cy="modal-delete"
            show={show}
            onHide={() => setShow(false)}
            size="md"
            centered
        >
            <Modal.Header id="headerStyle">
                <Modal.Title id="titleStyle">
                    <img
                        data-cy="modal-delet-icon"
                        src={alertIcon} alt="Warning"
                    />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="bodyStyle">
                <p
                    data-cy="modal-delete-title"
                    id="pBodyStyle">
                    Apakah anda yakin menghapus {name} {" "}
                    <b>"{value}"</b>
                </p>
            </Modal.Body>
            <Modal.Footer
                id="footerStyle"
            >
                <Button
                    data-cy="modal-delete-cancel-button"
                    variant="light"
                    onClick={() => setShow(false)}>
                    Batal
                </Button>
                <Button
                    data-cy="modal-delete-confirm-button"
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

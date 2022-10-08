import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import alertIcon from '../assets/img/alert-icon.svg'

export default function ModalDelete(props) {
    const { onHide, name, value } = props

    return (
        <Modal
            {...props}
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
                <Button variant="light" onClick={() => onHide()}>Batal</Button>
                <Button variant="danger" onClick={() => onHide()}>Hapus</Button>
            </Modal.Footer>
        </Modal>
    )
}

import React from 'react'
import { Modal } from "react-bootstrap"
import iconAlertSmall from '../assets/img/icon-alert-small.svg'

export default function ModalAlert(props) {
    return (
        <Modal
            {...props}
            size="md"
            centered
        >
            <Modal.Body
                style={{
                    display: "flex",
                    height: "58px",
                    paddingLeft: "30px"
                }}
            >
                <img src={iconAlertSmall} alt="Alert" />
                <p style={{ marginLeft: '13px' }}>
                    {props.name} berhasil dihapus
                </p>
            </Modal.Body>
        </Modal>
    )
}

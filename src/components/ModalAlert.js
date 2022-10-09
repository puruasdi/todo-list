import React from 'react'
import { Modal } from "react-bootstrap"
import iconAlertSmall from '../assets/img/icon-alert-small.svg'

export default function ModalAlert(props) {

    const { showAlert, alertName, setShowAlert } = props;

    return (
        <Modal
            data-cy="modal-information"
            show={showAlert}
            onHide={() => setShowAlert(false)}
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
                <img
                    data-cy="modal-information-icon"
                    src={iconAlertSmall} alt="Alert"
                />
                <p
                    data-cy="modal-information-title"
                    style={{ marginLeft: '13px' }}
                >
                    {alertName} berhasil dihapus
                </p>
            </Modal.Body>
        </Modal>
    )
}

import React from 'react'
import { Modal } from "react-bootstrap"
import iconAlertSmall from '../assets/img/icon-alert-small.svg'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setShowAlert } from '../state/slice/alertSlice';

export default function ModalAlert() {
    //redux
    const { showAlert, alertName } = useSelector((state) => state.alert)
    const dispatch = useDispatch()

    return (
        <Modal
            show={showAlert}
            onHide={() => dispatch(setShowAlert(false))}
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
                    {alertName} berhasil dihapus
                </p>
            </Modal.Body>
        </Modal>
    )
}

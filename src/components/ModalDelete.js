import React from 'react';
import { Modal } from 'react-bootstrap'
import alertIcon from '../assets/img/alert-icon.svg'

const footerStyle = {
    justifyContent: "center",
    border: '0',
    paddingBottom: "43px"
}

const headerStyle = {
    border: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const titleStyle = {
    paddingTop: "34px",
}

const bodyStyle = {
    textAlign: "center",
    padding: "0 46px 0 46px",
}

const pBodyStyle = {
    fontWeight: "500",
    fontSize: "18px",
}

export default function ModalDelete(props) {
    const { onHide, name, value } = props

    return (
        <Modal
            {...props}
            size="md"
            centered
        >
            <Modal.Header style={headerStyle}>
                <Modal.Title style={titleStyle}>
                    <img src={alertIcon} alt="Warning" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={bodyStyle}>
                <p style={pBodyStyle}>
                    Apakah anda yakin menghapus {name} {" "}
                    <b>"{value}"</b>
                </p>
            </Modal.Body>
            <Modal.Footer
                style={footerStyle}
            >
                <button className='button cancel-button' onClick={() => onHide()} >Batal</button>
                <button className='button delete-button' >Hapus</button>
            </Modal.Footer>
        </Modal>
    )
}

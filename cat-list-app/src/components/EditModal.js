import React from "react"
import { Modal, Button } from "react-bootstrap"

// styles
const modalStyles = {
  // needed to fix bug of modal not showing
  opacity: "1"
}

export default function EditModal({showing, handleClose}) {
  return (
    <>
      <Modal show={showing} onHide={handleClose} style={modalStyles} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
import React, { useState } from "react"
import { ButtonToolbar, Button } from "react-bootstrap"
// import edit modal
import EditModal from "./EditModal"

export default function ProfileButtons() {
  // state for edit modal
  const [show, setShow] = useState(false)
  // functions to open and close modal
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // delete cat
  const handleDelete = () => {
    console.log("deleting")
  }

  return (
    <div>
      <EditModal showing={show} handleClose={handleClose} />
      <ButtonToolbar>
        <Button className="pull-right" variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button className="pull-right" variant="warning" onClick={handleShow}>
          Edit
        </Button>
      </ButtonToolbar>
    </div>
  )
}
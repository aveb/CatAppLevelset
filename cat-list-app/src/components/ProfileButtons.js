import React, { useState } from "react"
import { ButtonToolbar, Button } from "react-bootstrap"
// import edit modal
import EditModal from "./EditModal"

export default function ProfileButtons({catProfile, setCatProfile, cats, setCats}) {
  // state for edit modal
  const [show, setShow] = useState(false)
  // functions to open and close modal
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // delete cat
  const handleDelete = () => {
    // copy cats
    const currentCats = cats.slice(0)
    // get index to delete
    cats.forEach((cat, index) => {
      if (cat.id === catProfile.id) {
        // remove cat from cats array
        currentCats.splice(index, 1)
        // delete cat from localStorage
        localStorage.setItem("allCats", JSON.stringify(currentCats))
        // update state
        setCats(currentCats)
        setCatProfile({})
      }
    })
  }

  return (
    <div>
      <EditModal
        showing={show}
        handleClose={handleClose}
        catProfile={catProfile}
        setCatProfile={setCatProfile}
        cats={cats}
        setCats={setCats}
      />
      <ButtonToolbar>
        <Button bsStyle="warning" onClick={handleShow}>
          Edit
        </Button>
        <Button bsStyle="danger" onClick={handleDelete}>
          Delete
        </Button>
      </ButtonToolbar>
    </div>
  )
}

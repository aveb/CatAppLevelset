import React, { useState } from "react"
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap"

export default function EditModal({ showing, handleClose, catProfile, cats, setCats, setCatProfile }) {
  // grab current values
  const { thumbnailUrl, ownerName, name, birthdate } = catProfile
  // set initial form state
  const [currentUrl, setCurrentUrl] = useState(thumbnailUrl)
  const [currentName, setCurrentName] = useState(name)
  const [currentBirthDate, setCurrentBirthdate] = useState(birthdate)
  const [currentOwner, setCurrentOwner] = useState(ownerName)

  // handle user input
  const handleNameChange = e => {
    setCurrentName(e.target.value)
  }
  const handleUrlChange = e => {
    setCurrentUrl(e.target.value);
  }
  const handleBirthDateChange = e => {
    setCurrentBirthdate(e.target.value)
  }
  const handleOwnerNameChange = e => {
    setCurrentOwner(e.target.value)
  }
  // handle save changes
  const handleSave = () => {
    // update appropriate cat index in array
    const { id, viewsCount } = catProfile
    const currentCats = cats
    const currentCat = {
      id,
      thumbnailUrl: currentUrl,
      name: currentName,
      birthdate: currentBirthDate,
      ownerName: currentOwner,
      viewsCount
    }
    // find cat to update
    cats.forEach((cat, index) => {
      if (cat.id === catProfile.id) {
        currentCats[index] = currentCat
      }
    })
    // save updated array to state
    setCats(currentCats)
    // update localStorage
    localStorage.setItem("allCats", JSON.stringify(currentCats))
    // update current profile
    setCatProfile(currentCat)
    // close modal
    handleClose()
  }

  return (
    <>
      <Modal show={showing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Thumbnail Url</ControlLabel>
              <FormControl
                type="text"
                value={currentUrl}
                placeholder="Add a Url"
                onChange={handleUrlChange}
              />
              <br />
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type="text"
                value={currentName}
                placeholder="Enter text"
                onChange={handleNameChange}
              />
              <br />
              <ControlLabel>Birth date</ControlLabel>
              <FormControl
                type="text"
                value={currentBirthDate}
                placeholder="YYYY-MM-DD"
                onChange={handleBirthDateChange}
              />
              <br />
              <ControlLabel>Select</ControlLabel>
              <FormControl
                componentClass="select"
                value={currentOwner}
                placeholder="select"
                onChange={handleOwnerNameChange}
              >
                <option value="Avery">Avery</option>
                <option value="Macela">Marcela</option>
                <option value="Patricia">Patricia</option>
                <option value="Sam">Sam</option>
                <option value="Jesse">Jessse</option>
              </FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="success" onClick={handleSave}>
            Save
          </Button>
          <Button bsStyle="default" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

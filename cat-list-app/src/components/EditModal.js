import React, { useState } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap"

export default function EditModal({
  showing,
  handleClose,
  catProfile,
  cats,
  setCats,
  setCatProfile
}) {
  // grab current cat profile values
  const { thumbnailUrl, ownerName, name, birthdate } = catProfile
  // set initial form state
  const [currentUrl, setCurrentUrl] = useState(thumbnailUrl)
  const [currentName, setCurrentName] = useState(name)
  const [currentBirthDate, setCurrentBirthdate] = useState(birthdate)
  const [currentOwner, setCurrentOwner] = useState(ownerName)

  // handle user input in form
  const handleNameChange = e => {
    setCurrentName(e.target.value)
  }
  const handleUrlChange = e => {
    setCurrentUrl(e.target.value)
  }
  const handleBirthDateChange = date => {
    const formatedDate = (moment(date).format("YYYY-MM-DD"))
    setCurrentBirthdate(formatedDate)
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
            <FormGroup>
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
              <ControlLabel>Select Owner</ControlLabel>
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
                <option value="Jesse">Jesse</option>
              </FormControl>
              <br />
              <ControlLabel>Birth date</ControlLabel>
              <div>
                <label>
                  <DatePicker
                    dateFormat="MMMM d, yyyy"
                    selected={new Date(moment(currentBirthDate))}
                    onChange={handleBirthDateChange}
                  />
                </label>
              </div>
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

// props validation
EditModal.propTypes = {
  showing: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  catProfile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    birthdate: PropTypes.string,
    ownerName: PropTypes.string,
    viewsCount: PropTypes.number
  }).isRequired,
  setCatProfile: PropTypes.func.isRequired,
  setCats: PropTypes.func.isRequired,
  cats: PropTypes.arrayOf(PropTypes.object).isRequired
}

import React, { useState } from "react"
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap"

export default function SearchCats({cats, setCats}) {
  // form input state
  const [searchText, setSearchText] = useState("")
  // search as user types and update cats
  const handleSearch = e => {
    const param = e.target.value
    setSearchText(param)
    // filter cats array, reset if search param empty string
    if (param !== "") {
      const filteredCats = cats.filter(cat =>
        cat.name.toLowerCase().startsWith(param.toLowerCase())
      )
      // update cats array
      setCats(filteredCats)
    } else {
      // reset array
      setCats(JSON.parse(localStorage.getItem("allCats")))
    }
  }

  return (
    <form>
      <FormGroup controlId="formBasicText">
        <ControlLabel>Search</ControlLabel>
        <FormControl
          type="text"
          value={searchText}
          placeholder="Start typing..."
          onChange={handleSearch}
        />
      </FormGroup>
    </form>
  )
}

import React from "react"
import { Image, Row, Col } from "react-bootstrap"

// styles
const padding = {
  padding: "5px"
}
const img = {
  maxWidth: "100px"
}

export default function CatListItem({
  catInfo,
  setCatProfile,
  cats,
  setCats,
  catProfile 
}) {
  const handleClick = () => {
    // check if not currently being viewed. Else do nothing
    if ( catInfo.id !== catProfile.id ) {
      // update view count
      cats.forEach((cat, index) => {
        if (catInfo.id === cat.id) {
          // update catInfo object
          const updatedCatInfo = catInfo
          updatedCatInfo.viewsCount += 1
          // update cats array
          const updatedCats = cats
          updatedCats[index] = updatedCatInfo
          // update state with new cats array
          setCats(updatedCats)
          // update localStorage
          localStorage.setItem("allCats", JSON.stringify(updatedCats))
          // update profile with clicked cat info
          setCatProfile(updatedCatInfo)
        }
      })
    }
  }

  const { name, thumbnailUrl, birthdate } = catInfo
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={handleClick} style={padding} role="button">
      <Row>
        <Col xs={12} sm={6}>
          <Image style={img} src={thumbnailUrl} thumbnail />
        </Col>
        <Col xs={12} sm={6}>
          <h5>{name}</h5>
        </Col>
      </Row>
      <h5>{birthdate}</h5>
    </div>
  )
}

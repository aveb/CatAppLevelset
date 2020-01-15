import React from "react"
import { Row, Col, Image } from "react-bootstrap"

// styles
const padding = {
  padding: "5px"
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
          // update profile with clicked cat info
          setCatProfile(updatedCatInfo)
        }
      })
    }
  }

  const { name, thumbnailUrl, birthdate } = catInfo
  return (
    <div onClick={handleClick} style={padding}>
      <Row>
        <Col md={6}>
          <Image src={thumbnailUrl} thumbnail fluid />
        </Col>
        <Col md={6}>
          <h3>{name}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5>{birthdate}</h5>
        </Col>
      </Row>
    </div>
  )
}

import React from "react"
import { Row, Col, Image } from "react-bootstrap"

export default function CatListItem({ catInfo, setCatProfile }) {
  const handleClick = () => {
    // update catProfile state
    setCatProfile(catInfo)
  }

  const { name, thumbnailUrl, birthdate } = catInfo
  return (
    <div onClick={handleClick}>
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

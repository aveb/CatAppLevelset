import React from "react"
import { Row, Col, Image } from "react-bootstrap"

export default function CatListItem({ catInfo }) {
  const { name, thumbnailUrl, birthdate } = catInfo
  return (
    <div>
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

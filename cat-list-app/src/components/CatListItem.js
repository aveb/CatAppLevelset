import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"

export default function CatListItem({ catInfo }) {
  const { name, thumbnailUrl } = catInfo
  return (
    <Container>
      <Row>
        <Col>
          {/* <Image src={thumbnailUrl} thumbnail fluid /> */}
          <h2>Picture</h2>
        </Col>
        <Col>
          <h3>{name}</h3>
        </Col>
      </Row>
    </Container>
  )
}

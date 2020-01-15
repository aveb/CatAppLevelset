import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"

// styles
const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
const image = {
  marginTop: "20%",
  maxWidth: "600px"
}

export default function CatProfile({catProfile}) {
  const { id, name, birthdate, thumbnailUrl, ownerName, viewsCount } = catProfile
  // conditionally render profile
  if (id) {
    return (
      <Container style={center}>
        <Row>
          <Col>
            <Image src={thumbnailUrl} rounded style={image} />
          </Col>
          <Col>
            <h2>{name}</h2>
          </Col>
          <Col>
            <h3>{birthdate}</h3>
          </Col>
          <Col>
            <h3>Owned By: {ownerName}</h3>
          </Col>
          <Col>
            <h3>Viewed {viewsCount} times</h3>
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <div style={center}>
      <h1>Click on A Cat</h1>
    </div>
  )
}

import React, { useState } from "react"
// import bootstrap 3
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-theme.min.css"
// import compontents
import { Container, Row, Col } from "react-bootstrap"
import CatList from "./components/CatList"
import CatProfile from "./components/CatProfile"
// column styles
const colStyle = {
  borderRight: "1px solid black"
}

function App() {
  // create cat profile state
  const [catProfile, setCatProfile] = useState({})
  return (
    <Container>
      <Row>
        <Col xs sm={4} style={colStyle}>
          <Row>
            <h4>Search Component</h4>
          </Row>
          <CatList setCatProfile={setCatProfile} />
        </Col>
        <Col>
          <CatProfile catProfile={catProfile} />
        </Col>
      </Row>
    </Container>
  )
}

export default App

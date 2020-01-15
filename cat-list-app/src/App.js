import React from "react"
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
  return (
    <Container>
      <Row>
        <Col xs sm={4} style={colStyle}>
          <Row>
            <h4>Search Component</h4>
          </Row>
          <CatList />
        </Col>
        <Col>
          <CatProfile />
        </Col>
      </Row>
    </Container>
  )
}

export default App

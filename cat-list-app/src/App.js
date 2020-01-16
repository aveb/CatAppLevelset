import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
// use csv from d3 to import and parse mock data
import { csv } from "d3"
import catData from "./mockCatData.csv"
// import bootstrap 3
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-theme.min.css"
// import compontents
import CatList from "./components/CatList"
import CatProfile from "./components/CatProfile"
// styles
const colStyle = {
  border: "1px solid black"
}
const search = {
  borderBottom: "1px solid black"
}

const center = {
  textAlign: "center"
}

function App() {
  // create cat profile state
  const [catProfile, setCatProfile] = useState({})
  // keep track of cats array in state
  const [cats, setCats] = useState([])
  // import mock cat data the first time component is rendered
  useEffect(() => {
    csv(catData, cat => {
      // coerce id and viewsCount into numbers
      const { id, thumbnailUrl, name, birthdate, ownerName, viewsCount } = cat
      return {
        id: +id,
        thumbnailUrl,
        name,
        birthdate,
        ownerName,
        viewsCount: +viewsCount
      }
    }).then(parsedCatData => {
      // set mock data in component state
      setCats(parsedCatData)
    })
  }, [])
  // render component
  return (
    <Container>
      <Row>
        <Col sm={4} style={colStyle}>
          <div style={search}>
            <h4>Search Component</h4>
          </div>
          <CatList
            setCatProfile={setCatProfile}
            catProfile={catProfile}
            cats={cats}
            setCats={setCats}
          />
        </Col>
        <Col sm={8}>
          <div style={center}>
            <CatProfile
              setCatProfile={setCatProfile}
              catProfile={catProfile}
              cats={cats}
              setCats={setCats}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App

import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
// use csv from d3 to import and parse mock data
import { csv } from "d3"
import catData from "../mockCatData.csv"
// import CatListItem component
import CatListItem from "./CatListItem"
// styles
const card = {
  borderBottom: "1px solid black"
}

export default function CatList({setCatProfile}) {
  // keep track of cat list
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

  return (
    <Row>
      {cats.map(cat => (
        <Col key={cat.id} style={card}>
          <CatListItem catInfo={cat} setCatProfile={setCatProfile} />
        </Col>
      ))}
    </Row>
  )
}

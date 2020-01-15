import React, { useState, useEffect } from "react"
// use csv from d3 to import and parse mock data
import { csv } from "d3"
import catData from "../mockCatData.csv"

export default function CatList() {
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
    <div>
      <h1>Cat list here!</h1>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  )
}

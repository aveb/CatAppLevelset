import React from "react"
// import CatListItem component
import CatListItem from "./CatListItem"
// styles
const card = {
  borderBottom: "1px solid black"
}

export default function CatList({ catProfile, setCatProfile, cats, setCats }) {
  return (
    <div>
      {cats.map(cat => (
        <div style={card} key={cat.id}>
          <CatListItem
            catInfo={cat}
            setCatProfile={setCatProfile}
            catProfile={catProfile}
            cats={cats}
            setCats={setCats}
          />
        </div>
      ))}
    </div>
  )
}

import React from "react"
import PropTypes from "prop-types"
// import CatListItem component
import CatListItem from "./CatListItem"
// styles
const card = {
  borderTop: "1px solid black"
}

export default function CatList({ catProfile, setCatProfile, cats, setCats }) {
  // maps through cats array and displays clickable card for each cat
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

// props validation
CatList.propTypes = {
  catProfile: PropTypes.instanceOf(Object).isRequired,
  setCatProfile: PropTypes.func.isRequired,
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCats: PropTypes.func.isRequired
}

import React from "react"
import { Image } from "react-bootstrap"

// styles
const padding = {
  padding: "5px"
}
const img = {
  maxWidth: "100px"
}

export default function CatListItem({
  catInfo,
  setCatProfile,
  cats,
  setCats,
  catProfile 
}) {
  const handleClick = () => {
    // check if not currently being viewed. Else do nothing
    if ( catInfo.id !== catProfile.id ) {
      // update view count
      cats.forEach((cat, index) => {
        if (catInfo.id === cat.id) {
          // update catInfo object
          const updatedCatInfo = catInfo
          updatedCatInfo.viewsCount += 1
          // update cats array
          const updatedCats = cats
          updatedCats[index] = updatedCatInfo
          // update state with new cats array
          setCats(updatedCats)
          // update localStorage
          localStorage.setItem("allCats", JSON.stringify(updatedCats))
          // update profile with clicked cat info
          setCatProfile(updatedCatInfo)
        }
      })
    }
  }

  const { name, thumbnailUrl, birthdate } = catInfo
  return (
    <div onClick={handleClick} style={padding}>
      <Image style={img} src={thumbnailUrl} thumbnail />
      <h3 className="pull-right">{name}</h3>
      <h5>{birthdate}</h5>
    </div>
  )
}

import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import ProfileButtons from "./ProfileButtons"

// styles
const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
const image = {
  marginTop: "10%",
  maxWidth: "400px",
  borderRadius: "5px"
}

const profile = {
  textAlign: "left"
}

export default function CatProfile({
  catProfile,
  setCatProfile,
  cats,
  setCats
}) {
  const {
    id,
    name,
    birthdate,
    thumbnailUrl,
    ownerName,
    viewsCount
  } = catProfile
  // conditionally render profile
  if (id) {
    return (
      <div style={profile}>
        <Image src={thumbnailUrl} style={image} />
        <h2>{name}</h2>
        <h3>{birthdate}</h3>
        <h3>Owned By: {ownerName}</h3>
        <h3>Viewed {viewsCount} times</h3>
        <ProfileButtons
          catProfile={catProfile}
          setCatProfile={setCatProfile}
          cats={cats}
          setCats={setCats}
        />
      </div>
    )
  }
  return (
    <div style={center}>
      <h1>Click on A Cat</h1>
    </div>
  )
}

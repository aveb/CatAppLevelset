import React from "react"

export default function CatProfile({catProfile}) {
  const { id } = catProfile
  
  // conditionally render profile
  if(id) {
    return (
      <h1>Here is a cat!</h1>
    )
  }
  return (
    <h1>Click on A Cat</h1>
  )
}

import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
import { Image, Row, Col } from "react-bootstrap"

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
  setCats,
  catProfile
}) {
  const handleClick = () => {
    // check if not currently being viewed. Else do nothing
    if (catInfo.id !== catProfile.id) {
      // update view count
      const currentCats = JSON.parse(localStorage.getItem("allCats"))
      currentCats.forEach((cat, index) => {
        if (catInfo.id === cat.id) {
          // update catInfo object
          const updatedCatInfo = catInfo
          updatedCatInfo.viewsCount += 1
          // update current cats array at correct index
          currentCats[index] = updatedCatInfo
          // update state with new cats array
          setCats(currentCats)
          // update localStorage
          localStorage.setItem("allCats", JSON.stringify(currentCats))
          // update profile with clicked cat info
          setCatProfile(updatedCatInfo)
        }
      })
    }
  }

  const { name, thumbnailUrl, birthdate } = catInfo
  // linting error because using div as clickeable.  Use card in future
  return (
    <div onClick={handleClick} style={padding} role="button">
      <Row>
        <Col xs={12} sm={6}>
          <Image style={img} src={thumbnailUrl} thumbnail />
        </Col>
        <Col xs={12} sm={6}>
          <h5>{name}</h5>
        </Col>
      </Row>
      <h5>{moment(birthdate).format("ll")}</h5>
    </div>
  )
}

// props validation
CatListItem.propTypes = {
  catInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    birthdate: PropTypes.string
  }).isRequired,
  setCatProfile: PropTypes.func.isRequired,
  setCats: PropTypes.func.isRequired,
  catProfile: PropTypes.instanceOf(Object).isRequired
}

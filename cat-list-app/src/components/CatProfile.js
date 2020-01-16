import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
import { Image, Grid, Row, Col } from "react-bootstrap"
import ProfileButtons from "./ProfileButtons"

// styles
const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const imageStyle = {
  maxWidth: "50%",
  marginTop: "50px"
}

const buttonContainer = {
  // give buttons room when less than 5 cats
  marginBottom: "50px"
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
      <Grid>
        <Row>
          <Col xm={10} xsOffset={1}>
            <Image src={thumbnailUrl} rounded style={imageStyle} />
          </Col>
          <Col xm={10} xsOffset={1}>
            <h4>{name}</h4>
            <h5>Born {moment(birthdate).format("ll")}</h5>
            <h5>Owned By: {ownerName}</h5>
            <h5>Viewed {viewsCount} times</h5>
          </Col>
          <Col
            xm={6}
            xsOffset={2}
            smOffset={4}
            mdOffset={5}
            style={buttonContainer}
          >
            <ProfileButtons
              catProfile={catProfile}
              setCatProfile={setCatProfile}
              cats={cats}
              setCats={setCats}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
  // render if no cat has been clicked on since load or refresh
  return (
    <div style={center}>
      <h1>Click on a cat!</h1>
    </div>
  )
}

// props validation
CatProfile.propTypes = {
  catProfile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    birthdate: PropTypes.string,
    ownerName: PropTypes.string,
    viewsCount: PropTypes.number
  }).isRequired,
  setCatProfile: PropTypes.func.isRequired,
  setCats: PropTypes.func.isRequired,
  cats: PropTypes.arrayOf(PropTypes.object).isRequired
}

import React from "react"
import { Navbar } from "react-bootstrap"

// styles
const navContainer = {
  // override container styling
  marginRight: "-15px",
  marginLeft: "-16px"
}

const navTitle = {
  color: "white"
}

export default function NavbarTitle() {
  return (
    <Navbar inverse staticTop style={navContainer}>
      <Navbar.Header>
        <Navbar.Brand>
          <a style={navTitle} href="/">Cats!</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

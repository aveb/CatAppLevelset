import React from "react"
import { Navbar } from "react-bootstrap"

// styles
const navStyles = {
  // override container styling
  marginRight: "-15px",
  marginLeft: "-16px"
}

export default function NavbarTitle() {
  return (
    <Navbar inverse staticTop style={navStyles}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Cats!</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

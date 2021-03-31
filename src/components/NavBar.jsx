import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class NetflixNavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar className= "bg-dark text-white" expand="lg">
          <Navbar.Brand href="#home">
            <img src="https://logos-marcas.com/wp-content/uploads/2020/04/Netflix-Logo.png" height="60px" width="130px" alt="netflix" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default NetflixNavBar;

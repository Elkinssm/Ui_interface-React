import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./style.scss";

export default class Menu extends Component {
  render() {
    return (
      <div className="max-w">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#home">MicroCredits System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/users">User</Nav.Link>
              <Nav.Link href="/credits">Credits</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

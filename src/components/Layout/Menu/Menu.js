import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Nav
          activeKey="/home"
         // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/users">User</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/credits">Credits</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

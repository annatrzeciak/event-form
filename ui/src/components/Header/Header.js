import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header">
        <Navbar bg="primary" variant="dark" expand="sm">
          <Navbar.Brand href="/">
            <img src={logo} className="App-logo" alt="logo" /> Register app
          </Navbar.Brand>
          <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/">
                Event form
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/saved-forms">
                Saved forms
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
Header.propTypes = {};

export default Header;

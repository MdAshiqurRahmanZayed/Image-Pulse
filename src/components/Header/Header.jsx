// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import "./Header.css";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  let links;
  if (props.token) {
    links = (
      <NavItem>
        <Link className="nav-link" to="/logout">
          Logout
        </Link>
      </NavItem>
    )
  }
  else{
    links = (
      <NavItem>
        <Link className="nav-link" to="/signin">
          Signin
        </Link>
      </NavItem>
    );

  }
  return (
    <div>
      <Navbar className="navbar_color" light expand="md">
        <NavbarBrand tag={Link} to="/">
          Image Pulse
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
           {links}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default connect(mapStateToProps)(Header);

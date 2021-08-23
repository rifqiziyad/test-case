import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";

function NavBar(props) {
  return (
    <div>
      <Navbar className={styles.navbarMain} collapseOnSelect expand="lg">
        <Container fluid className={styles.navbar}>
          <img
            onClick={() => props.history.push("/")}
            className={styles.logo}
            src={logo}
            alt="Logo"
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={styles.navbarLink}
          >
            <Nav className={`me-auto`}>
              <NavDropdown title="Movies" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  className={styles.dropdown}
                  href="#action/3.1"
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={styles.dropdown}
                  href="#action/3.2"
                >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={styles.dropdown}
                  href="#action/3.3"
                >
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">TV Show</Nav.Link>
              <Nav.Link href="#pricing">People</Nav.Link>
              <Nav.Link href="#pricing">More</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button
            className={styles.btnRegister}
            onClick={() => props.history.push("/first-form")}
          >
            Register
          </button>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

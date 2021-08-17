import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import iconNotif from "../../assets/bell.png";
import iconSearch from "../../assets/search.png";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <div>
      <Navbar className={styles.navbarMain} collapseOnSelect expand="lg">
        <Container fluid className={styles.navbar}>
          <img className={styles.logo} src={logo} alt="Logo" />
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
            {/* <Nav className={styles.navRight}>
              <Nav.Link className={`${styles.navPlus}`} href="#deets">
                +
              </Nav.Link>
              <Nav.Link href="#memes">EN</Nav.Link>
              <Navbar.Brand className={styles.dropdownIcon} href="#home">
                <img
                  src={iconNotif}
                  className={styles.icon}
                  alt="Icon Notification"
                />
              </Navbar.Brand>
              <Nav.Link href="#memes">R</Nav.Link>
              <Navbar.Brand className={styles.dropdownIcon} href="#home">
                <img
                  className={styles.icon}
                  src={iconSearch}
                  alt="Icon Search"
                />
              </Navbar.Brand>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

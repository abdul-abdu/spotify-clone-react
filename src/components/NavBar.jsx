import { Link } from "react-router-dom";

const { DropdownToggle, NavBtn } = require("./styled_components/Button");
const { Navbar, Nav, Dropdown } = require("react-bootstrap");

const NavBar = () => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="sm"
      style={{ left: "235px", backgroundColor: "black" }}
    >
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <i className="fas fa-less-than text-white"></i>
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <i className="fas fa-greater-than text-white"></i>
          </Nav.Link>
        </Nav>
        <Nav>
          <NavBtn variant="outline-secondary">UPGRADE</NavBtn>
          <Dropdown drop="left">
            <DropdownToggle variant="outline-secondary" id="dropdown-basic">
              Abdug'affor
            </DropdownToggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

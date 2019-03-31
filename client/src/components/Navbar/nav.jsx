import React from 'react';
import './nav.css';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/" className="title">Clean Spoon</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/profile"><p className="links">Edit Profile</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard"><p className="links">Recipe Search</p></NavLink>
              </NavItem>
              <NavItem> <Button color="info" className="loginBtn" href="/signup">Sign Up</Button>
              </NavItem>
              <NavItem> <Button color="success" className="loginBtn" href="/login">Login</Button>{' '}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default nav;
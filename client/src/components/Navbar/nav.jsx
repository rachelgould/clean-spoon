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
  Modal,
  prevState,
  ModalHeader, 
  ModalBody,
  ModalFooter
} from 'reactstrap';

import './logo.png'


class nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
       modal: !prevState.modal
    });
  }

  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/"><img src={require('./logo.png')} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/profile"><p className="links">Edit Profile</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><p className="links">Recipe Search</p></NavLink>
              </NavItem>
              <NavItem> <Button color="success" className="loginBtn" href="/login">Login</Button>{' '}
              </NavItem>
              <NavItem> <Button color="info" className="loginBtn" href="/signup">Sign Up</Button>
              </NavItem>
              <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default nav;
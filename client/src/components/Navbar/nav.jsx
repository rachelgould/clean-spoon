import React from 'react';
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './logo.png'


class nav extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //   isOpen: false,
    //   modal: false
    // };
    // this.toggle = this.toggle.bind(this);
  }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //      modal: !prevState.modal
  //   });
  // }

  render() {
    return (
      <div className="navigation">
        <Navbar expand="md">
          <NavbarBrand href="/"><img src={require('./logo.png')} alt="Clean Spoon logo" width="200" /></NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/fridge"><p className="links">Fridge</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/list"><p className="links">Shopping List</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile"><p className="links">Profile</p></NavLink>
              </NavItem>
              <NavItem> <Button 
              color="primary" className="loginBtn recipe-search" href="/search">Recipe Search</Button>
              </NavItem>
            </Nav>
          {/* </Collapse> */}
        </Navbar> 
      </div>
    );
  }
}

export default nav;
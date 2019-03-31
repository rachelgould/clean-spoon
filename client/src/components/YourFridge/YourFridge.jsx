import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './YourFridge.css';
import { Input, InputGroup, InputGroupAddon, Table,Card, ButtonDropdown, Button, DropdownToggle, DropdownItem, DropdownMenu, CardTitle, CardText, Row, Col } from 'reactstrap';


class YourFridge extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <Row>
        <Col sm="8" id="search">
          <Card body >
            <CardTitle className="CardTitle">This is your fridge</CardTitle>
            <Table>
        <tbody>
          <tr>
            <th scope="row">Lima Beans</th>
            <td><button>Update</button></td>
            <td><button>Remove</button></td>
          </tr>
          <tr>
            <th scope="row">Carrots</th>
            <td><button>Update</button></td>
            <td><button>Remove</button></td>
          </tr>
          <tr>
            <th scope="row">Chicken Breasts</th>
            <td><button>Update</button></td>
            <td><button>Remove</button></td>
          </tr>
        </tbody>
      </Table>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary" color="danger">Add Item</Button>
        </InputGroupAddon>
      </InputGroup>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default YourFridge;




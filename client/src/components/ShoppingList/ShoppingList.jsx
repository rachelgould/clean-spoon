import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Input, InputGroup, InputGroupAddon, Table,Card, ButtonDropdown, Button, DropdownToggle, DropdownItem, DropdownMenu, CardTitle, CardText, Row, Col } from 'reactstrap';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Row>
        <Col sm="8" id="search">
          <Card body >
            <CardTitle className="CardTitle">This is your Shopping List</CardTitle>
            <Table>
        <tbody>
          <tr>
            <th scope="row">Peas</th>
            <td><button>Remove</button></td>
          </tr>
          <tr>
            <th scope="row">Eggs</th>
            <td><button>Remove</button></td>
          </tr>
          <tr>
            <th scope="row">Spaghetti</th>
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
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary" color="danger">Send to SMS</Button>
        </InputGroupAddon>
      </InputGroup>
          </Card>
        </Col>
      </Row>
      </div>
    );
  }
}
export default ShoppingList;




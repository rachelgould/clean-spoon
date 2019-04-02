import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Table,Card, Button, CardTitle, Row, Col } from 'reactstrap';

// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div class="row" id="shoppingList">
   <div class="col-md-4">
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
      </div>
      </div>
    );
  }
}
export default ShoppingList;



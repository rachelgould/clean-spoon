import React, { Component } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';

// Used For Shopping List and Your Fridge 

class FridgeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      name: value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({name: ''});
  }

  render() {
    
    return (
      <div className="dashboard-sub-form">
        <h3>Add ingredients </h3>
        <Form onSubmit={this.onFormSubmit} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              id="addFood"
              type="text"
              name="item"
              value={this.state.name}
              placeholder="e.g. olive oil"
              onChange={this.handleChange} />
            <Button color="danger">Add Item</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default FridgeForm;
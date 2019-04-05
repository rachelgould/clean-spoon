import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';

//For Shopping List

class Form extends Component {
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
    event.stopPropagation();
    this.props.handleSubmit(this.state);
    this.setState({name: ''});
  }

  render() {
    const { item } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          id="addFood"
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Enter food item here and hit enter"
          onChange={this.handleChange} />
        <Button color="danger">Add Item</Button>
      </form>
    );
  }
}

export default Form;
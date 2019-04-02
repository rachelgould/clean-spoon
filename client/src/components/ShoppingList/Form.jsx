import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';

//For Shopping List

class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      item: '',
    }
    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { item } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          id="addFood"
          type="text"
          name="item"
          value={item}
          placeholder="Enter food item here and hit enter"
          onChange={this.handleChange} />
        {/* <Button color="danger">Add Item</Button> */}
      </form>
    );
  }
}

export default Form;
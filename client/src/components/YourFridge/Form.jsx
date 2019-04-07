import React, { Component } from 'react';
import { Button } from 'reactstrap';

// If we add in expiry dates:
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

//For Shopping List and Your Fridge 

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
    this.props.handleSubmit(this.state);
    this.setState({name: ''});
  }

  render() {
    
    return (
      <form onSubmit={this.onFormSubmit}>
      
        <input
          id="addFood"
          type="text"
          name="item"
          value={this.state.name}
          placeholder="Enter food item here and hit enter"
          onChange={this.handleChange} />
        <Button color="danger">Add Item</Button>
      </form>
      
    );
  }
}

export default Form;
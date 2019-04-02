import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

class SMSForm extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      number: '',
    }
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      number: value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.smsSubmit(this.state);
  }

  render() {
    return (
    <div id="smsParent">
      <div id="sms">
        <form onSubmit={this.onFormSubmit}>
          <InputGroup size="lg">
            <Input placeholder="Phone number" type="tel" onChange={this.handleChange} />
            <InputGroupAddon addonType="append" >
            <Button color="danger">Send to SMS</Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    </div>
    )
  }
}

export default SMSForm;
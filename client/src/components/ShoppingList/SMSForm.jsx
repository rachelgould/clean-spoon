import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { sendSMS } from '../../lib/api.js'

class SMSForm extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      number: '',
    }
    this.state = this.initialState;
  }


  handleChange = event => {
    const { value } = event.target;
    this.setState({
      number: value
    });
  }

  formatPhoneNum = () => {
    return this.state.number.toString()
  }

  submitForm = (event) => {
    event.preventDefault();
    // event.stopPropagation();
    let id = this.props.cookies.get('id')
    let phoneNum = this.state.number
    sendSMS(id, phoneNum);
  }

  render() {
    return (
    <div id="smsParent">
      <div id="sms">
        <form onSubmit={this.submitForm}>
          <InputGroup size="lg">
            <Input placeholder="Phone number" onChange={this.handleChange} />
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
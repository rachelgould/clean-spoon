import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';

class SMSForm extends Component {
  render() {
    return (
    <div id="smsParent">
      <div id="sms">
        <InputGroup size="lg">
          <Input />
          <InputGroupAddon addonType="append" >
          <Button color="danger">Send to SMS</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
    )
  }
}

export default SMSForm;
import React, { Component } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
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
    let id = this.props.cookies.get('id')
    let phoneNum = this.state.number
    sendSMS(id, phoneNum);
  }

  render() {
    return (
      <div className="dashboard-sub-form">
        <h3>Share </h3>
        <Form onSubmit={this.submitForm} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              id="phoneNum"
              type="text"
              name="phoneNum"
              value={this.state.name}
              placeholder="e.g. 6049012010"
              onChange={this.handleChange} />
            <Button color="danger">Send</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default SMSForm;
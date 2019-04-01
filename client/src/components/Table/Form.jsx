import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      item: '',
    }

    this.state = this.initialState
  }


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name] : value
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
                <label>Item</label>
                <input 
                    type="text" 
                    item="item" 
                    // value={name} 
                    onChange={this.handleChange} />

<input type="button" value="Submit" onClick={this.submitForm} />

            </form>
        );
    }
}

export default Form;
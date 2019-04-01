import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/nav.jsx';
import QuickSearch from '../QuickSearch/QuickSearch.jsx';
import Table from '../Table/Table.jsx'
import Form from '../Table/Form.jsx'

class Welcome extends Component {

  state = {
     foodItems: [
      {
        item: 'Chicken'
      },
      {
        item: 'Lima Beans'
      },
      {
        item: 'Eggs'
      },
      {
        item: 'Youghurt'
      }
    ]
  };

  removeCharacter = index => {
    const { foodItems } = this.state
  
    this.setState({
      foodItems: foodItems.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = item => {
    this.setState({ foodItems: [...this.state.foodItems, item] })
  }

  render() {

    const { foodItems } = this.state;

    return (
      <div>
        <Navbar />
        <p>This is the Welcome page</p>
        <Table characterData={foodItems} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Welcome;




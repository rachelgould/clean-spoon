import React, { Component } from 'react'
import {Button} from 'reactstrap';

//For Shopping List and Your Fridge 

// Removed this for the time being, not necessery
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Item</th>    
        <th>Action</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row}</td>
        <td><Button color="danger"> Remove </Button></td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {

    const { characterData, removeItem } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeItem={removeItem} />
      </table>
    )
  }
}

export default Table
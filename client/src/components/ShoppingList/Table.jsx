import React, { Component } from 'react'
import {Button} from 'reactstrap';

//For Shopping List 

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
        <td>{row.item}</td>
        <td><Button color="danger" onClick={() => props.removeItem(index)}> Remove </Button></td>
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
import React, { Component } from 'react'
import {Button} from 'reactstrap';

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {

    return (
      <tr key={index}>
        <td id="leftAlign"><a href={row.url} target="_blank" rel="noopener noreferrer">{row.name}</a></td>
        <td id="floatRight">
        <Button onClick={() => props.removeItem(row.id)}> Remove </Button> 
        </td>
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
        <TableBody cookies={this.props.cookies} characterData={characterData} removeItem={removeItem} />
      </table>
    )
  }
}
export default Table
import React, { Component } from 'react'
import {Button} from 'reactstrap';



const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Item</th>    
        <th>Website</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  
  const rows = props.characterData.map((row, index) => {
    let id = row.id;

    console.log("ROW ID" + row.id);


    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.url}</td>
        <td>{row.id}</td>
      
        <Button onClick={() => props.removeItem(id)}> Remove </Button>

        
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    const { characterData, removeItem } = this.props

    return (
      <table>
        {/* <TableHeader /> */}
        <TableBody cookies={this.props.cookies} characterData={characterData} removeItem={removeItem} />
      </table>
    )
  }
}
export default Table
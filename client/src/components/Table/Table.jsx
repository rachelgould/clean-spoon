import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Item</th>
        
        </tr>
      </thead>
    )
  }

  const TableBody = props => {

      const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.item}</td>
            <td><button onClick={() => props.removeCharacter(index)}><i>Delete</i></button></td>
          </tr>
        )
      })
    
      return <tbody>{rows}</tbody>
  }


class Table extends Component {
    render() {
        
        const { characterData, removeCharacter } = this.props

      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
      )
    }
  }

export default Table
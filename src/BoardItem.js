import React from 'react'

function BoardItem(props) {
    const handleRemove = () => {
        
    }

  return (
    <tr>
        <td>{props.row.brdno}</td>
        <td>{props.row.brdtitle}</td>
        <td>{props.row.brdwriter}</td>
        <td>{props.row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><button onClick={handleRemove}>X</button></td>
    </tr>
  )
}

export default BoardItem
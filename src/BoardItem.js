import React from 'react'

function BoardItem(props) {
    const handleRemove = () => {
      const {row, onRemove} = props;
      onRemove(row.brdno);
    }
    const handleEdit = () => {
      const {row, onEditRow} = props;
      onEditRow(row);
    }

  return (
    <tr>
        <td>{props.row.brdno}</td>
        <td>{props.row.brdtitle}</td>
        <td>{props.row.brdwriter}</td>
        <td>{props.row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><button onClick={handleEdit}>Edit</button></td>
        <td><button onClick={handleRemove}>X</button></td>
    </tr>
  )
}

export default BoardItem
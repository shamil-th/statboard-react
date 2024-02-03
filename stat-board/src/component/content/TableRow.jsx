import React from 'react';

const TableRow = ({data,index}) => {
  return (
    <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.quantity}</td>
    <td>{data.price}</td>
    </tr>
  )
}

export default TableRow